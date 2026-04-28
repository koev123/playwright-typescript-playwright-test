import test from '@lib/BaseTest';

test('Create User - Navigate to Add New User Page', async ({ CreateUserPage }) => {

 
    await CreateUserPage.navigateToLoginPage();
    await CreateUserPage.verifyLoginPageIsVisible();
  

    await CreateUserPage.loginToApplication();
    await CreateUserPage.verifyUserLoggedIn();
  

  
    await CreateUserPage.navigateToCreateUserPage();
    await CreateUserPage.verifyCreateUserPageIsVisible(); // ✅ add verification

  await test.step('Fill and submit create user form', async () => {
    const unique = Date.now();
    const uniquePhoneNumber = `09${unique.toString().slice(-8)}`;

    await CreateUserPage.createUser({
      staffId: `wow${unique}`,
      fullName: 'test2',
      username: `test${unique}`,
      phoneNumber: uniquePhoneNumber,
      email: `email${unique}@gmail.com`,
      password: '12345678',
      confirmPassword: '12345678',
      roleName: 'Super Admin'
    });
  });

  await test.step('Verify user created successfully', async () => {
    await CreateUserPage.verifyUserCreated();
  });

});
