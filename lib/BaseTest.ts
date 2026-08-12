import { TestInfo, test as baseTest, Page, BrowserContext } from '@playwright/test';
import { CreateUserPage } from '../pageFactory/pageRepository/CreateUserPage';
import { LoginPage } from '../pageFactory/pageRepository/LoginPage';
import { RolePage } from '../pageFactory/pageRepository/RolePage';
import { WebActions } from './WebActions';
import AxeBuilder from '@axe-core/playwright';

const test = baseTest.extend<{
    webActions: WebActions;
    loginPage: LoginPage;
     CreateUserPage: CreateUserPage;
    RolePage: RolePage;
    makeAxeBuilder: AxeBuilder;
    testInfo: TestInfo;
}>({
    webActions: async ({ page, context }: { page: Page; context: BrowserContext }, use) => {
        await use(new WebActions(page, context));
    },
    loginPage: async ({ page, context }: { page: Page; context: BrowserContext }, use) => {
        await use(new LoginPage(page, context));
    },
    CreateUserPage: async ({ page, context }: { page: Page; context: BrowserContext }, use) => {
        await use(new CreateUserPage(page, context));
    },
    RolePage: async ({ page, context }: { page: Page; context: BrowserContext }, use) => {
        await use(new RolePage(page, context));
    },

    makeAxeBuilder: async ({ page }: { page: Page }, use) => {
        await use(new AxeBuilder({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
            .exclude('#commonly-reused-element-with-known-issue'));
    }
})

export default test;
