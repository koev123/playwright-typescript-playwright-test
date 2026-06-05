import test from '@lib/BaseTest';
import { expect } from '@playwright/test';
test(`Verify Elements Page.`, async ({ page, loginPage }) => {
    await loginPage.navigateToURL();
    await loginPage.verifyLoginPageIsVisible();
    expect(await page.screenshot({ animations: 'disabled' })).toMatchSnapshot('MainPage.png', {
        maxDiffPixelRatio: 0.02,
    });
});