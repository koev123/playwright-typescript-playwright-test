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
        this.SAVE_BUTTON = page.getByRole('button', { name: /save|create/i });
        this.ADD_NEW_USER_BUTTON = page.getByRole('button', { name: /add new/i });
        this.CREATE_USER_HEADER = page.getByText('Add New', { exact: true });
        this.SUCCESS_MESSAGE = page.getByText(/success|created/i);
        this.USER_MANAGEMENT_BUTTON = this.page.getByRole('button', { name: 'User Management' });
    }

    private roleCheckbox(roleName: string): Locator {
        return this.page.getByRole('checkbox', { name: new RegExp(roleName, 'i') });
    }

    private roleLabel(roleName: string): Locator {
        return this.page.locator('label', { hasText: roleName });
    }

    async navigateToCreateUserPage(): Promise<void> {
        await this.USER_MANAGEMENT_BUTTON.click();
        await expect(this.ADD_NEW_USER_BUTTON).toBeVisible();
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

    async verifyUserCreated(): Promise<void> {
        await expect(this.SUCCESS_MESSAGE.first()).toBeVisible();
    }
}
