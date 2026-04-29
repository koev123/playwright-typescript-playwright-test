import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';

type CreateUserInput = {
    staffId: string;
    fullName: string;
    username: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
    roleName: string;
};

type EditUserInput = Partial<CreateUserInput>;

export class CreateUserPage extends LoginPage {
    readonly STAFFID_EDITBOX: Locator;
    readonly FULLNAME_EDITBOX: Locator;
    readonly USERNAME_EDITBOX: Locator;
    readonly PHONENUMBER_EDITBOX: Locator;
    readonly EMAIL_EDITBOX: Locator;
    readonly GENDER_SELECT: Locator;
    readonly PASSWORD_EDITBOX: Locator;
    readonly DEPARTMENT_SELECT: Locator;
    readonly STATUS_SELECT: Locator;
    readonly CONFIRMPASSWORD_EDITBOX: Locator;
    readonly SAVE_BUTTON: Locator;
    readonly ADD_NEW_USER_BUTTON: Locator;
    readonly USER_MANAGEMENT_BUTTON: Locator;

    readonly CREATE_USER_HEADER: Locator;
    readonly SUCCESS_MESSAGE: Locator;

    constructor(page: Page, context: BrowserContext) {
        super(page, context);

        this.STAFFID_EDITBOX = page.getByPlaceholder('Enter Staff ID');
        this.FULLNAME_EDITBOX = page.getByPlaceholder('Enter Full Name');
        this.USERNAME_EDITBOX = page.getByPlaceholder('Enter Username');
        this.PHONENUMBER_EDITBOX = page.locator('#phoneNumber');
        this.EMAIL_EDITBOX = page.locator('#email');
        this.GENDER_SELECT = page.getByPlaceholder('Select Gender');
        this.PASSWORD_EDITBOX = page.locator('#password');
        this.DEPARTMENT_SELECT = page.getByPlaceholder('Select Department');
        this.STATUS_SELECT = page.locator('[data-status="active"]');
        this.CONFIRMPASSWORD_EDITBOX = page.locator('#confirmPassword');
        this.SAVE_BUTTON = page.getByRole('button', { name: /save|create|update/i });
        this.ADD_NEW_USER_BUTTON = page.getByRole('button', { name: /add new/i });
        this.CREATE_USER_HEADER = page.getByText('Add New', { exact: true });
        this.SUCCESS_MESSAGE = page.getByText(/success|created|updated|deleted/i);
        this.USER_MANAGEMENT_BUTTON = this.page.locator('button, [role="button"]').filter({ hasText: 'User Management' }).first();
    }

    private roleCheckbox(roleName: string): Locator {
        return this.page.getByRole('checkbox', { name: new RegExp(roleName, 'i') });
    }

    private roleLabel(roleName: string): Locator {
        return this.page.locator('label', { hasText: roleName });
    }

    private warningDialogOkButton(): Locator {
        return this.page.getByRole('button', { name: 'OK' });
    }

    private userRow(identifier: string): Locator {
        return this.page.getByRole('row', { name: new RegExp(identifier, 'i') });
    }

    async navigateToUserManagementPage(): Promise<void> {
        const alreadyOnUserManagementPage = await expect(this.ADD_NEW_USER_BUTTON)
            .toBeVisible({ timeout: 5000 })
            .then(() => true)
            .catch(() => false);

        if (alreadyOnUserManagementPage) {
            return;
        }

        await this.USER_MANAGEMENT_BUTTON.click();
        await expect(this.ADD_NEW_USER_BUTTON).toBeVisible();
    }

    async navigateToCreateUserPage(): Promise<void> {
        await this.navigateToUserManagementPage();
        await this.ADD_NEW_USER_BUTTON.click();
    }

    async verifyCreateUserPageIsVisible(): Promise<void> {
        await expect(this.CREATE_USER_HEADER).toBeVisible();
        await expect(this.STAFFID_EDITBOX).toBeVisible();
        await expect(this.FULLNAME_EDITBOX).toBeVisible();
        await expect(this.EMAIL_EDITBOX).toBeVisible();
    }

    async createUser(user: CreateUserInput): Promise<void> {
        await this.STAFFID_EDITBOX.fill(user.staffId);
        await this.FULLNAME_EDITBOX.fill(user.fullName);
        await this.USERNAME_EDITBOX.fill(user.username);
        await this.PHONENUMBER_EDITBOX.fill(user.phoneNumber);
        await this.EMAIL_EDITBOX.fill(user.email);
        await this.PASSWORD_EDITBOX.fill(user.password);
        await this.CONFIRMPASSWORD_EDITBOX.fill(user.confirmPassword);
        const roleCheckbox = this.roleCheckbox(user.roleName);
        if (!(await roleCheckbox.isChecked())) {
            await this.roleLabel(user.roleName).click();
        }
        await this.SAVE_BUTTON.click();
    }

    async editUser(identifier: string, user: EditUserInput): Promise<void> {
        const row = this.userRow(identifier);

        await expect(row).toBeVisible();
        await row.getByRole('img', { name: /edit/i }).click();

        if (user.staffId) await this.STAFFID_EDITBOX.fill(user.staffId);
        if (user.fullName) await this.FULLNAME_EDITBOX.fill(user.fullName);
        if (user.username) await this.USERNAME_EDITBOX.fill(user.username);
        if (user.phoneNumber) await this.PHONENUMBER_EDITBOX.fill(user.phoneNumber);
        if (user.email) await this.EMAIL_EDITBOX.fill(user.email);
        if (user.password) await this.PASSWORD_EDITBOX.fill(user.password);
        if (user.confirmPassword) await this.CONFIRMPASSWORD_EDITBOX.fill(user.confirmPassword);

        if (user.roleName) {
            const roleCheckbox = this.roleCheckbox(user.roleName);
            await roleCheckbox.check({ force: true }).catch(async () => {
                if (!(await roleCheckbox.isChecked())) {
                    await this.roleLabel(user.roleName).click();
                }
            });
        }

        await this.SAVE_BUTTON.click();
    }

    async deleteUser(identifier: string): Promise<void> {
        const row = this.userRow(identifier);
        const confirmDeleteButton = this.page.getByRole('button', { name: /^yes$/i });
        const deleteDialog = this.page.getByText(/are you sure you want to delete user/i);

        await expect(row).toBeVisible();
        await row.getByRole('img', { name: /key/i }).click();
        await expect(deleteDialog).toBeVisible({ timeout: 5000 });
        await expect(confirmDeleteButton).toBeVisible();
        await confirmDeleteButton.click();
    }

    async verifyUserCreated(): Promise<void> {
        await expect(this.SUCCESS_MESSAGE.first()).toBeVisible();
    }

    async verifyUserUpdated(): Promise<void> {
        const warningVisible = await this.warningDialogOkButton()
            .isVisible()
            .catch(() => false);

        if (warningVisible) {
            throw new Error('Update user failed because the form validation warning dialog is shown.');
        }

        await expect(this.SUCCESS_MESSAGE.first()).toBeVisible();
    }

    async verifyUserDeleted(identifier: string): Promise<void> {
        await expect(this.userRow(identifier)).toHaveCount(0, { timeout: 15000 });
    }
}
