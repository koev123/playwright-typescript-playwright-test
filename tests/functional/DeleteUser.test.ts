import test from '@lib/BaseTest';

test('Delete User - Remove Existing User', async ({ CreateUserPage }) => {
    const unique = Date.now();
    const staffId = `wow${unique}`;
    const phoneNumber = `09${unique.toString().slice(-8)}`;

    await CreateUserPage.navigateToLoginPage();
    await CreateUserPage.verifyLoginPageIsVisible();
    await CreateUserPage.loginToApplication();
    await CreateUserPage.verifyUserLoggedIn();

    await test.step('Create a user to delete', async () => {
        await CreateUserPage.navigateToCreateUserPage();
        await CreateUserPage.verifyCreateUserPageIsVisible();
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
        await CreateUserPage.verifyUserCreated();
    });

    await test.step('Delete the created user', async () => {
        await CreateUserPage.navigateToUserManagementPage();
        await CreateUserPage.deleteUser(staffId);
        await CreateUserPage.verifyUserDeleted(staffId);
    });
});
