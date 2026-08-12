import { BrowserContext, expect, Locator, Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { testConfig } from '../../testConfig';

type CreateRoleInput = {
    name: string;
    description?: string;
    active?: boolean;
};

type EditRoleInput = Partial<CreateRoleInput>;

export class RolePage extends LoginPage {
    readonly CREATE_ROLE_HEADER: Locator;
    readonly ROLE_NAME_EDITBOX: Locator;
    readonly DESCRIPTION_TEXTAREA: Locator;
    readonly STATUS_CHECKBOX: Locator;
    readonly SAVE_BUTTON: Locator;
    readonly SUCCESS_MESSAGE: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.CREATE_ROLE_HEADER = page.getByText('Add New', { exact: true });
        this.ROLE_NAME_EDITBOX = page.locator('#name');
        this.DESCRIPTION_TEXTAREA = page.locator('textarea[name="description"]');
        this.STATUS_CHECKBOX = page.locator('#status');
        this.SAVE_BUTTON = page.locator('input[type="submit"][value="Save"], input[type="submit"][value="Update"], button:has-text("Save"), button:has-text("Update")').first();
        this.SUCCESS_MESSAGE = page.getByText(/success|created|added|updated|deleted/i).first();
    }

    private roleRow(roleName: string): Locator {
        return this.page.locator('table tbody tr', { hasText: roleName }).first();
    }

    async navigateToCreateRolePage(): Promise<void> {
        await this.page.goto('/users/role/create');
    }

    async navigateToRoleManagementPage(): Promise<void> {
        await this.page.goto('/users/role');
    }

    async verifyCreateRolePageIsVisible(): Promise<void> {
        await expect(this.CREATE_ROLE_HEADER).toBeVisible();
        await expect(this.ROLE_NAME_EDITBOX).toBeVisible();
        await expect(this.DESCRIPTION_TEXTAREA).toBeVisible();
        await expect(this.STATUS_CHECKBOX).toBeVisible();
        await expect(this.SAVE_BUTTON).toBeVisible();
    }

    private async setCheckboxState(checkbox: Locator, value: boolean): Promise<void> {
        const checkboxHandle = await checkbox.elementHandle();
        if (checkboxHandle) {
            await checkboxHandle.evaluate((el, checked) => {
                const input = el as HTMLInputElement;
                if (input.checked !== checked) {
                    input.checked = checked;
                    input.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }, value);
            await expect(checkbox).toHaveJSProperty('checked', value, { timeout: 5000 });
            return;
        }

        await this.page.evaluate((selector, checked) => {
            const input = document.querySelector(selector) as HTMLInputElement;
            if (!input) throw new Error(`Checkbox not found: ${selector}`);
            if (input.checked !== checked) {
                input.checked = checked;
                input.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }, '#status', value);
        await expect(checkbox).toHaveJSProperty('checked', value, { timeout: 5000 });
    }

    private async clickSaveButton(): Promise<void> {
        await this.SAVE_BUTTON.scrollIntoViewIfNeeded();
        await this.SAVE_BUTTON.waitFor({ state: 'visible', timeout: 5000 });
        const saveHandle = await this.SAVE_BUTTON.elementHandle();
        if (saveHandle) {
            await saveHandle.evaluate((button: HTMLElement) => button.click());
        } else {
            await this.SAVE_BUTTON.click({ force: true });
        }
    }

    async createRole(role: CreateRoleInput): Promise<void> {
        await this.ROLE_NAME_EDITBOX.fill(role.name);

        if (role.description) {
            await this.DESCRIPTION_TEXTAREA.fill(role.description);
        }

        if (role.active !== undefined) {
            await this.setCheckboxState(this.STATUS_CHECKBOX, !!role.active);
        }

        await this.clickSaveButton();

        await expect(this.SUCCESS_MESSAGE).toBeVisible({ timeout: testConfig.waitForElement }).catch(() => {
            throw new Error('Role creation did not produce a success message. Check form validation or save behavior.');
        });
    }

    async verifyRoleCreated(): Promise<void> {
        await expect(this.SUCCESS_MESSAGE).toBeVisible({ timeout: testConfig.waitForElement });
    }

    async editRole(roleName: string, role: EditRoleInput): Promise<void> {
        const row = this.roleRow(roleName);

        await expect(row).toBeVisible({ timeout: testConfig.waitForElement });
        await row.getByRole('img', { name: /edit/i }).click();
        await expect(this.ROLE_NAME_EDITBOX).toBeVisible();

        if (role.name) {
            await this.ROLE_NAME_EDITBOX.fill(role.name);
        }

        if (role.description !== undefined) {
            await this.DESCRIPTION_TEXTAREA.fill(role.description);
        }

        if (role.active !== undefined) {
            await this.setCheckboxState(this.STATUS_CHECKBOX, !!role.active);
            console.log(`DEBUG: STATUS_CHECKBOX checked after setCheckboxState = ${await this.STATUS_CHECKBOX.isChecked()}`);
        }

        await this.clickSaveButton();

        const successText = await this.SUCCESS_MESSAGE.innerText().catch(() => 'NO MESSAGE');
        console.log(`DEBUG: Success message after edit = ${successText}`);

        await expect(this.SUCCESS_MESSAGE).toBeVisible({ timeout: testConfig.waitForElement }).catch(() => {
            throw new Error('Role update did not produce a success message. Check form validation or save behavior.');
        });
    }

    async deleteRole(roleName: string): Promise<void> {
        const row = this.roleRow(roleName);
        const rowActionTargets = row.locator('button, a, [role="button"], img, svg');
        const deleteModal = this.page.locator('#delete-modal-comfirm');
        const confirmDeleteButton = deleteModal.getByRole('button', { name: /confirm|yes|delete/i });

        await expect(row).toBeVisible({ timeout: testConfig.waitForElement });

        const rowActionCount = await rowActionTargets.count();
        if (rowActionCount === 0) {
            throw new Error(`No action controls found for role row: ${roleName}`);
        }

        await rowActionTargets.nth(rowActionCount - 1).click();
        await expect(deleteModal).toBeVisible();
        await confirmDeleteButton.click();
    }

    async verifyRoleUpdated(): Promise<void> {
        await expect(this.SUCCESS_MESSAGE).toBeVisible({ timeout: testConfig.waitForElement });
    }

    async verifyRoleStatus(roleName: string, status: string): Promise<void> {
        const row = this.roleRow(roleName);
        await expect(row).toBeVisible({ timeout: testConfig.waitForElement });
        await expect(row).toContainText(status, { timeout: testConfig.waitForElement });
    }

    async verifyRoleDeleted(roleName: string): Promise<void> {
        await expect(this.SUCCESS_MESSAGE).toBeVisible({ timeout: testConfig.waitForElement });
        await expect(this.roleRow(roleName)).toHaveCount(0);
    }

    async verifyRoleIsVisible(roleName: string): Promise<void> {
        await expect(this.roleRow(roleName)).toBeVisible({ timeout: testConfig.waitForElement });
    }
}
