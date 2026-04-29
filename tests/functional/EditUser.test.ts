import test from '@lib/BaseTest';

test('Edit User - Update Existing User Details', async ({ CreateUserPage }) => {
    const unique = Date.now();
    const staffId = `wow${unique}`;
    const originalPhoneNumber = `09${unique.toString().slice(-8)}`;
    const updatedPhoneNumber = `08${unique.toString().slice(-8)}`;

    await CreateUserPage.navigateToLoginPage();
    await CreateUserPage.verifyLoginPageIsVisible();
    await CreateUserPage.loginToApplication();
    await CreateUserPage.verifyUserLoggedIn();

    await test.step('Create a user to edit', async () => {
        await CreateUserPage.navigateToCreateUserPage();
        await CreateUserPage.verifyCreateUserPageIsVisible();
        await CreateUserPage.createUser({
            staffId,
            fullName: 'test2',
            username: `test${unique}`,
            phoneNumber: originalPhoneNumber,
            email: `email${unique}@gmail.com`,
            password: '12345678',
            confirmPassword: '12345678',
            roleName: 'Super Admin'
        });
        await CreateUserPage.verifyUserCreated();
    });

    await test.step('Edit the created user', async () => {
        await CreateUserPage.navigateToUserManagementPage();
        await CreateUserPage.editUser(staffId, {
            fullName: 'updated user',
            phoneNumber: updatedPhoneNumber,
            email: `updated${unique}@gmail.com`,
            roleName: 'Super Admin'
        });
        await CreateUserPage.verifyUserUpdated();
    });
});
