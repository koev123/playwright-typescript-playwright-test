import test from '../../lib/BaseTest';

test('Verify web-admin Login @Smoke', async ({ loginPage }: { loginPage: any }) => {
  await test.step('Navigate to web-admin login page', async () => {
    await loginPage.navigateToURL();
  });

  await test.step('Verify login page is displayed', async () => {
    await loginPage.verifyLoginPageIsVisible();
  });

  await test.step('Enter valid username', async () => {
    await loginPage.enterUsername("koev");
  });

  await test.step('Enter valid password', async () => {
    await loginPage.enterPassword("koevgoodluck");
  });

  await test.step('Click on login button', async () => {
    await loginPage.clickLoginButton();
  });

  await test.step('Verify user is successfully logged in', async () => {
    await loginPage.verifyUserLoggedIn();
  });

});