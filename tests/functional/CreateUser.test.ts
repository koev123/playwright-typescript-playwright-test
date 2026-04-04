import test from '../../lib/BaseTest';
import { CreateUserPage } from '../../pageFactory/pageRepository/CreateUserPage';

test('Create User - Navigate to Add New User Page', async ({ page, context }) => {
  

  // 1️⃣ Navigate to the real web-admin login page
  await test.step('Navigate to Login Page', async () => {
    // Replace this with your real QA URL
    await page.goto('https://web-admin.yescarauto.com/login');
    await page.waitForLoadState('networkidle'); // Wait until network is idle
  });

  // 2️⃣ Login step
  await test.step('Login to system', async () => {
    // Wait until username input is visible before filling
    await page.waitForSelector('#username', { state: 'visible' });
    await page.fill('#username', 'koev'); // Replace with actual username
    await page.fill('#password', 'koev@123'); // Replace with actual password
    await page.click('button[type="submit"]');

    // Optional: wait until the dashboard or Users module is loaded
  //  await page.waitForSelector('#welcome-page', { state: 'visible', timeout: 60000 });
  });

  // 3️⃣ Navigate to Users > Add New
  await test.step('Navigate to Add New User Page', async () => {
    // Click User Management
    await page.getByRole('button', { name: /User Management/i }).click();
    await page.getByRole('button', { name: /User/i }).click();

    // Click User submenu (adjust text if needed)
    // await page.getByText('User', { exact: true }).click();

    // // Click Add New button
    await page.locator('//button[contains(., "Add New")]').click();

    // instantiate page object
    const createUserPage = new CreateUserPage(page, context);

    await page.getByRole('textbox', { name: 'Enter Staff ID' }).click();
    await page.getByRole('textbox', { name: 'Enter Staff ID' }).fill('wow');
    await page.getByRole('textbox', { name: 'Enter Full Name' }).click();
    await page.getByRole('textbox', { name: 'Enter Full Name' }).fill('test');
    await page.getByRole('textbox', { name: 'Enter Username' }).click();
    await page.getByRole('textbox', { name: 'Enter Username' }).fill('test');
    await page.getByRole('textbox', { name: 'Enter Phone Number' }).click();
    await page.getByRole('textbox', { name: 'Enter Phone Number' }).fill('09866655');
    await page.getByRole('textbox', { name: 'Enter Email' }).click();
    await page.getByRole('textbox', { name: 'Enter Email' }).fill('email@gmail.com');
    await page.locator('.multiselect__tags').first().click();
    await page.locator('div:nth-child(6)').first().click();
    await page.getByRole('textbox', { name: 'Password', exact: true }).click();
    await page.getByRole('textbox', { name: 'Password', exact: true }).fill('12345678');
    await page.getByRole('textbox', { name: 'Confirm password' }).click();
    await page.getByRole('textbox', { name: 'Confirm password' }).fill('12345678');
    await page.getByText('Super Admin').click();
    await page.getByText('Web Manager').click();
    await page.getByRole('button', { name: 'Saveqq' }).click();
    
   
  });


});
