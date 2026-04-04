import { expect, Locator, Page, BrowserContext } from '@playwright/test';
import path from 'path';

export class ElementsPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly ELEMENTS_TITLE: Locator;
    readonly TEXT_BOX_TITLE: Locator;
    readonly FULL_NAME_EDITBOX: Locator;
    readonly SUBMIT_BUTTON: Locator;
    readonly SUBMITTED_TEXT: Locator;
    readonly HOME_CHECK_BOX: Locator;
    readonly HOME_SELECTED_TEXT: Locator;
    readonly NO_RADIO_BUTTON: Locator;
    readonly WEB_TABLES_HEADER: Locator;
    readonly WEB_TABLES_EDIT_ICON: Locator;
    readonly REGISTRATION_FORM_HEADER: Locator;
    readonly REGISTRATION_FORM_CLOSE_BUTTON: Locator;
    readonly DOUBLE_CLICK_BUTTON: Locator;
    readonly DOUBLE_CLICK_TEXT: Locator;
    readonly RIGHT_CLICK_BUTTON: Locator;
    readonly RIGHT_CLICK_TEXT: Locator;
    readonly HOME_LINK: Locator;
    readonly DOWNLOAD_BUTTON: Locator;
    readonly UPLOAD_BUTTON: Locator;
    readonly UPLOADED_FILE_TEXT: Locator;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.FULL_NAME_EDITBOX = page.getByPlaceholder(`Full Name`);
        this.SUBMIT_BUTTON = page.getByText(`Submit`);
        this.SUBMITTED_TEXT = page.getByText(`Name:AutoTest`, { exact: true }); // Matches exact text
        this.HOME_CHECK_BOX = page.getByText('Home');
        this.HOME_SELECTED_TEXT = page.locator(`.display-result`);
        this.NO_RADIO_BUTTON = page.locator(`#noRadio`); // Using CSS Selector
        this.WEB_TABLES_HEADER = page.getByRole('columnheader');
        this.WEB_TABLES_EDIT_ICON = page.getByRole('row', { name: 'Cierra' }).getByTitle('Edit').locator('svg'); // Chaining Locators
        this.REGISTRATION_FORM_HEADER = page.getByText('Registration Form');
        this.REGISTRATION_FORM_CLOSE_BUTTON = page.getByRole('button', { name: 'Close' });
        this.DOUBLE_CLICK_BUTTON = page.locator('#doubleClickBtn');
        this.DOUBLE_CLICK_TEXT = page.getByText('You have done a double click');
        this.RIGHT_CLICK_BUTTON = page.locator('#rightClickBtn');
        this.RIGHT_CLICK_TEXT = page.getByText('You have done a right click');
        this.HOME_LINK = page.getByText('Home', { exact: true });
        this.DOWNLOAD_BUTTON = page.locator(`#downloadButton`);
        this.UPLOAD_BUTTON = page.locator(`#uploadFile`)
        this.UPLOADED_FILE_TEXT = page.getByText('sampleFile.jpeg');
    }

    
}