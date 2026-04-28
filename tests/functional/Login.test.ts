
import test from '../../lib/BaseTest';

test('Verify web-admin Login @Smoke', async ({ loginPage }: { loginPage: any }) => {
  await test.step('Navigate to web-admin login page', async () => {
    await loginPage.navigateToURL('https://web-admin.yescarauto.com/login');
  });

  await test.step('Verify login page is displayed', async () => {
    await loginPage.verifyLoginPageIsVisible('https://web-admin.yescarauto.com/login');
  });

  await test.step('Enter valid username', async () => {
    await loginPage.enterUsername('koev');
  });

  await test.step('Enter valid password', async () => {
    await loginPage.enterPassword('koev@123');
  });

  await test.step('Click on login button', async () => {
    await loginPage.clickLoginButton();
  });

  await test.step('Verify user is successfully logged in', async () => {
    await loginPage.verifyUserLoggedIn();
  });

});