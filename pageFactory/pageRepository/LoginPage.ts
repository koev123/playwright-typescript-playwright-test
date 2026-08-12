import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { testConfig } from '../../testConfig';

let webActions: WebActions;

export class LoginPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly USERNAME_EDITBOX: Locator;
    readonly PASSWORD_EDITBOX: Locator;
    readonly LOGIN_BUTTON: Locator;
    readonly DASHBOARD_BUTTON: Locator;
    readonly DASHBOARD_HEADING: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        webActions = new WebActions(this.page, this.context);
        this.USERNAME_EDITBOX = page.locator('#username');
        this.PASSWORD_EDITBOX = page.locator('#password');
        this.LOGIN_BUTTON = page.getByRole('button', { name: 'Sign In' });
        this.DASHBOARD_BUTTON = page.getByRole('button', { name: /Dashboard/i }).first();
        this.DASHBOARD_HEADING = page.getByRole('heading', { name: /Form Submitted|Visitor Traffic/i }).first();
    }

    async navigateToURL(): Promise<void> {
        await this.page.goto("/");
    }

    async navigateToLoginPage(): Promise<void> {
        await this.navigateToURL();
    }

    async verifyLoginPageIsVisible(): Promise<void> {
        await expect(this.USERNAME_EDITBOX).toBeVisible();
        await expect(this.PASSWORD_EDITBOX).toBeVisible();
        await expect(this.LOGIN_BUTTON).toBeVisible();
    }

    async enterUsername(username: string): Promise<void> {
        await this.USERNAME_EDITBOX.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.PASSWORD_EDITBOX.fill(password);
    }

    async clickLoginButton(): Promise<void> {
        await this.LOGIN_BUTTON.click();
    }

    async clickOnLoginMainButton(): Promise<void> {
        await this.clickLoginButton();
    }

   async loginToApplication(): Promise<void> {
    const decipherPassword = await webActions.decipherPassword();
    await this.enterUsername(testConfig.username);
    await this.enterPassword(decipherPassword);
    await this.clickLoginButton();
    }

    async verifyUserLoggedIn(): Promise<void> {
        await expect(this.DASHBOARD_HEADING).toBeVisible();
        await expect(this.DASHBOARD_BUTTON).toBeVisible();
    }

    // async verifyProfilePage(): Promise<void> {
    //     await expect(this.WELCOME_HEADING).toBeVisible();
    // }
    
}
