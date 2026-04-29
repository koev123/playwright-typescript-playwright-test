import { BrowserContext, expect, Locator, Page } from '@playwright/test';
import { WebActions } from '@lib/WebActions';
import { testConfig } from '../../testConfig';

let webActions: WebActions;

export class LoginPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly USERNAME_EDITBOX: Locator;
    readonly PASSWORD_EDITBOX: Locator;
    readonly LOGIN_BUTTON: Locator;
    readonly LOGIN_FORM: Locator;
    readonly USER_MANAGEMENT_BUTTON: Locator;
    readonly AUTHENTICATED_NAV_ITEM: Locator;
    readonly BOOKS_SEARCH_BOX: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.USERNAME_EDITBOX = page.locator('#username');
        this.PASSWORD_EDITBOX = page.locator('#password');
        this.LOGIN_BUTTON = page.getByRole('button', { name: 'Sign In' });
        this.LOGIN_FORM = page.locator('form');
        this.USER_MANAGEMENT_BUTTON = page.locator('button, [role="button"]').filter({ hasText: 'User Management' }).first();
        this.AUTHENTICATED_NAV_ITEM = page.locator('button, [role="button"]').filter({ hasText: 'Dashboard' }).first();
        this.BOOKS_SEARCH_BOX = page.getByPlaceholder('Type to search');
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto('/');
    }

    async navigateToLoginPage(): Promise<void> {
        await this.navigateToURL();
    }

    async verifyLoginPageIsVisible(): Promise<void> {
        await expect(this.LOGIN_FORM).toBeVisible();
        await expect(this.USERNAME_EDITBOX).toBeVisible();
        await expect(this.PASSWORD_EDITBOX).toBeVisible();
        await expect(this.LOGIN_BUTTON).toBeVisible();
    }

    async enterUsername(username: string = testConfig.username): Promise<void> {
        await this.USERNAME_EDITBOX.fill(username);
    }

    async enterPassword(password?: string): Promise<void> {
        const resolvedPassword = password ?? await webActions.decipherPassword();
        await this.PASSWORD_EDITBOX.fill(resolvedPassword);
    }

    async clickLoginButton(): Promise<void> {
        await this.LOGIN_BUTTON.click();
    }

    async loginToApplication(): Promise<void> {
        await this.enterUsername();
        await this.enterPassword();
        await this.clickLoginButton();
        await this.page.waitForLoadState('domcontentloaded');
    }

    async verifyProfilePage(): Promise<void> {
        await expect(this.BOOKS_SEARCH_BOX).toBeVisible();
    }

    async verifyUserLoggedIn(): Promise<void> {
        const userManagementVisible = await expect(this.USER_MANAGEMENT_BUTTON)
            .toBeVisible({ timeout: 15000 })
            .then(() => true)
            .catch(() => false);

        if (userManagementVisible) {
            return;
        }

        await expect(this.AUTHENTICATED_NAV_ITEM).toBeVisible({ timeout: 15000 });
    }
}
