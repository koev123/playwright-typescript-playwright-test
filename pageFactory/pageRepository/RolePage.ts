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
  readonly ROLE_NAME_EDITBOX: Locator;
  readonly DESCRIPTION_TEXTAREA: Locator;
  readonly STATUS_CHECKBOX: Locator;
  readonly SAVE_BUTTON: Locator;

  constructor(page: Page, context: BrowserContext) {
    super(page, context);

    this.ROLE_NAME_EDITBOX = page.getByRole('textbox', {
      name: /role name/i,
    });

    this.DESCRIPTION_TEXTAREA = page.getByRole('textbox', {
      name: /description/i,
    });

    // If there is only ONE checkbox on the create/edit page,
    // this is okay.
    this.STATUS_CHECKBOX = page.getByRole('checkbox').first();

    // More robust save button selector with fallbacks
    this.SAVE_BUTTON = page.getByRole('button', {
      name: /save|create|update|submit/i,
    }).last();
  }

  /**
   * Find role row by role name
   */
  private roleRow(roleName: string): Locator {
    return this.page
      .locator('table tbody tr')
      .filter({
        hasText: roleName,
      })
      .first();
  }

  /**
   * Navigate to create role page
   */
  async navigateToCreateRolePage(): Promise<void> {
    await this.page.goto('/users/role/create');

    await this.page.waitForLoadState('domcontentloaded');

    await expect(this.ROLE_NAME_EDITBOX).toBeVisible({
      timeout: testConfig.waitForElement,
    });
  }

  /**
   * Navigate to role management page
   */
  async navigateToRoleManagementPage(): Promise<void> {
    await this.page.goto('/users/role');

    await this.page.waitForLoadState('domcontentloaded');

    await expect(this.page.locator('table')).toBeVisible({
      timeout: testConfig.waitForElement,
    });
  }

  /**
   * Verify create role page
   */
  async verifyCreateRolePageIsVisible(): Promise<void> {
    await expect(this.ROLE_NAME_EDITBOX).toBeVisible({
      timeout: testConfig.waitForElement,
    });

    await expect(this.DESCRIPTION_TEXTAREA).toBeVisible({
      timeout: testConfig.waitForElement,
    });

    await expect(this.STATUS_CHECKBOX).toBeVisible({
      timeout: testConfig.waitForElement,
    });

    await expect(this.SAVE_BUTTON).toBeVisible({
      timeout: testConfig.waitForElement,
    });
  }

  /**
   * Set checkbox state safely
   */
  private async setCheckboxState(
    checkbox: Locator,
    checked: boolean
  ): Promise<void> {
    await expect(checkbox).toBeVisible({
      timeout: testConfig.waitForElement,
    });

    const currentState = await checkbox.isChecked();

    console.log(
      `Checkbox current state: ${currentState}, expected: ${checked}`
    );

    if (currentState !== checked) {
      if (checked) {
        await checkbox.check({ force: true });
      } else {
        await checkbox.uncheck({ force: true });
      }
    }

    if (checked) {
      await expect(checkbox).toBeChecked({
        timeout: testConfig.waitForElement,
      });
    } else {
      await expect(checkbox).not.toBeChecked({
        timeout: testConfig.waitForElement,
      });
    }
  }

  /**
   * Click Save button
   */
  private async clickSaveButton(): Promise<void> {
    await expect(this.SAVE_BUTTON).toBeVisible({
      timeout: testConfig.waitForElement,
    });

    await expect(this.SAVE_BUTTON).toBeEnabled({
      timeout: testConfig.waitForElement,
    });

    await this.SAVE_BUTTON.scrollIntoViewIfNeeded();

    await this.SAVE_BUTTON.click();
  }

  /**
   * Wait for save/update operation
   */
  private async waitForSuccessMessage(): Promise<void> {
    // Give API/table update time to complete
    await this.page.waitForTimeout(1000);

    console.log(
      'Alerts:',
      await this.page.locator('[role="alert"]').allTextContents()
    );

    console.log(
      'Success alerts:',
      await this.page.locator('.alert-success').allTextContents()
    );

    console.log(
      'Toasts:',
      await this.page
        .locator('.toast, .toast-success')
        .allTextContents()
    );
  }

  /**
   * Create role
   */
  async createRole(role: CreateRoleInput): Promise<void> {
    await expect(this.ROLE_NAME_EDITBOX).toBeVisible({
      timeout: testConfig.waitForElement,
    });

    await this.ROLE_NAME_EDITBOX.fill(role.name);

    if (role.description !== undefined) {
      await this.DESCRIPTION_TEXTAREA.fill(role.description);
    }

    // IMPORTANT:
    // active:false means checkbox MUST be unchecked.
    if (role.active !== undefined) {
      await this.setCheckboxState(
        this.STATUS_CHECKBOX,
        role.active
      );
    }

    // Make sure values are correct before saving
    if (role.active === false) {
      await expect(this.STATUS_CHECKBOX).not.toBeChecked();
    }

    if (role.active === true) {
      await expect(this.STATUS_CHECKBOX).toBeChecked();
    }

    await this.clickSaveButton();

    await this.waitForSuccessMessage();

    // Wait until navigation/API/table update finishes
    await this.page.waitForLoadState('domcontentloaded').catch(() => {});
  }

  /**
   * Verify role created
   */
  async verifyRoleCreated(
    roleName?: string
  ): Promise<void> {
    await this.waitForSuccessMessage();

    if (roleName) {
      // Go to role management page if necessary
      if (!this.page.url().includes('/users/role')) {
        await this.navigateToRoleManagementPage();
      }

      const row = this.roleRow(roleName);

      await expect(row).toBeVisible({
        timeout: testConfig.waitForElement,
      });
    }
  }

  /**
   * Edit role
   */
  async editRole(
    roleName: string,
    role: EditRoleInput
  ): Promise<void> {
    const row = this.roleRow(roleName);

    await expect(row).toBeVisible({
      timeout: testConfig.waitForElement,
    });

    // Find edit button
    const editButton = row.getByRole('button', {
      name: /edit/i,
    });

    if (await editButton.count() > 0) {
      await editButton.first().click();
    } else {
      // Try edit link
      const editLink = row.getByRole('link', {
        name: /edit/i,
      });

      if (await editLink.count() > 0) {
        await editLink.first().click();
      } else {
        // Try edit image
        const editImage = row.getByRole('img', {
          name: /edit/i,
        });

        await expect(editImage).toBeVisible({
          timeout: testConfig.waitForElement,
        });

        await editImage.click();
      }
    }

    // Wait for page/navigation to complete
    await this.page.waitForLoadState('domcontentloaded').catch(() => {});
    await this.page.waitForTimeout(500);

    await expect(this.ROLE_NAME_EDITBOX).toBeVisible({
      timeout: testConfig.waitForElement,
    });

    if (role.name !== undefined) {
      await this.ROLE_NAME_EDITBOX.fill(role.name);
    }

    if (role.description !== undefined) {
      await this.DESCRIPTION_TEXTAREA.fill(role.description);
    }

    // Set active/inactive
    if (role.active !== undefined) {
      await this.setCheckboxState(
        this.STATUS_CHECKBOX,
        role.active
      );

      // Extra verification
      if (role.active) {
        await expect(this.STATUS_CHECKBOX).toBeChecked();
      } else {
        await expect(this.STATUS_CHECKBOX).not.toBeChecked();
      }
    }

    await this.clickSaveButton();

    await this.waitForSuccessMessage();

    // Wait for page update
    await this.page.waitForTimeout(1000);
  }

  /**
   * Delete role
   */
  async deleteRole(roleName: string): Promise<void> {
    const row = this.roleRow(roleName);

    await expect(row).toBeVisible({
      timeout: testConfig.waitForElement,
    });

    const deleteButton = row.getByRole('button', {
      name: /delete/i,
    });

    if (await deleteButton.count() > 0) {
      await deleteButton.first().click();
    } else {
      const deleteLink = row.getByRole('link', {
        name: /delete/i,
      });

      if (await deleteLink.count() > 0) {
        await deleteLink.first().click();
      } else {
        throw new Error(
          `Delete button/link not found for role: ${roleName}`
        );
      }
    }

    const deleteModal = this.page
      .locator(
        '#delete-modal-comfirm, #delete-modal-confirm'
      )
      .first();

    await expect(deleteModal).toBeVisible({
      timeout: testConfig.waitForElement,
    });

    const confirmDeleteButton = deleteModal
      .getByRole('button', {
        name: /confirm|yes|delete/i,
      })
      .first();

    await expect(confirmDeleteButton).toBeVisible({
      timeout: testConfig.waitForElement,
    });

    await expect(confirmDeleteButton).toBeEnabled({
      timeout: testConfig.waitForElement,
    });

    await confirmDeleteButton.click();

    await this.waitForSuccessMessage();
  }

  /**
   * Verify role updated
   */
  async verifyRoleUpdated(): Promise<void> {
    await this.waitForSuccessMessage();
  }

  /**
   * Verify role status
   */
  async verifyRoleStatus(
    roleName: string,
    expectedStatus: 'Active' | 'Inactive'
  ): Promise<void> {
    const row = this.roleRow(roleName);

    await expect(row).toBeVisible({
      timeout: testConfig.waitForElement,
    });

    // Find badge instead of checking entire row
    const statusBadge = row.locator(
      '.badge'
    );

    await expect(statusBadge).toBeVisible({
      timeout: testConfig.waitForElement,
    });

    await expect(statusBadge).toHaveText(
      expectedStatus,
      {
        timeout: testConfig.waitForElement,
      }
    );
  }

  /**
   * Verify role deleted
   */
  async verifyRoleDeleted(
    roleName: string
  ): Promise<void> {
    await this.waitForSuccessMessage();

    await expect(this.roleRow(roleName)).toHaveCount(0, {
      timeout: testConfig.waitForElement,
    });
  }
}