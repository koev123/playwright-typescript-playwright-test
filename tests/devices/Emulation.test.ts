import test from '@lib/BaseTest';

test.skip(`Verify Elements Page.`, async ({ loginPage, webActions }) => {
    await loginPage.navigateToURL();
    await webActions.clickByText('Elements');
    await webActions.clickByText('Text Box');
});
