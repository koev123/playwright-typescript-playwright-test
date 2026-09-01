import test from '@lib/BaseTest';

test('Create User - Navigate to Add New User Page', async ({ CreateUserPage }: any) => {
  const unique = Date.now();
  const staffId = `wow${unique}`;
  const phoneNumber = `09${unique.toString().slice(-8)}`;

  await test.step('Navigate to login page', async () => {
    await CreateUserPage.navigateToLoginPage();
    await CreateUserPage.verifyLoginPageIsVisible();
  });

  await test.step('Login to system', async () => {
    await CreateUserPage.loginToApplication();
    await CreateUserPage.verifyUserLoggedIn();
  });

  await test.step('Navigate to Add New User page', async () => {
    await CreateUserPage.navigateToCreateUserPage();
  });

  await test.step('Fill and submit create user form', async () => {
    await CreateUserPage.createUser({
      staffId,
      fullName: 'test2',
      username: `test${unique}`,
      phoneNumber,
      email: `email${unique}@gmail.com`,
      password: '12345678',
      confirmPassword: '12345678',
      roleName: 'Super Admin'
    });
  });
  await test.step('Verify user created successfully', async () => {
    await CreateUserPage.verifyUserCreated(); // e.g. success toast or table entry
  });
});
