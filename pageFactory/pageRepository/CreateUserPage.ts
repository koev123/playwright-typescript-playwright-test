import { Page, BrowserContext, Locator, expect } from '@playwright/test';
import { WebActions } from "@lib/WebActions";
import { testConfig } from '../../testConfig';


export class CreateUserPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly webActions: WebActions;

    readonly STAFFID_EDITBOX;
    readonly FULLNAME_EDITBOX;
    readonly USERNAME_EDITBOX;
    readonly PHONENUMBER_EDITBOX;
    readonly EMAIL_EDITBOX;
    readonly GENDER_SELECT;
    readonly PASSWORD_EDITBOX;
    readonly DEPARTMENT_SELECT;
    readonly STATUS_SELECT;
    readonly CONFIRMPASSWORD_EDITBOX;
    readonly ROLE_CHECKBOX;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.webActions = new WebActions(this.page, this.context);

        this.STAFFID_EDITBOX = page.locator('#staffId');
        this.FULLNAME_EDITBOX = page.locator('#fullName');
        this.USERNAME_EDITBOX = page.getByPlaceholder('Enter Username');
        this.PHONENUMBER_EDITBOX = page.locator('#phoneNumber');
        this.EMAIL_EDITBOX = page.locator('#email');
        this.GENDER_SELECT = page.getByPlaceholder('Select Gender');
        this.PASSWORD_EDITBOX = page.locator('#password');
        this.DEPARTMENT_SELECT = page.getByPlaceholder('Select Department');
        this.STATUS_SELECT = page.locator('[data-status="active"]');
        this.CONFIRMPASSWORD_EDITBOX = page.locator('#confirmPassword');
        this.ROLE_CHECKBOX = page.getByRole('checkbox', { name: 'supser admmin' });
    }

    
}