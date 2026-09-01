import test from '@lib/BaseTest';

test('Delete Role - Remove Existing Role', async ({ RolePage }: any) => {
    const unique = Date.now();
    const roleName = `Automated Role ${unique}`;

    await test.step('Navigate to login page', async () => {
        await RolePage.navigateToLoginPage();
        await RolePage.verifyLoginPageIsVisible();
    });

    await test.step('Login to system', async () => {
        await RolePage.loginToApplication();
        await RolePage.verifyUserLoggedIn();
    });

    await test.step('Create a role to delete', async () => {
        await RolePage.navigateToCreateRolePage();
        await RolePage.verifyCreateRolePageIsVisible();
        await RolePage.createRole({
            name: roleName,
            description: `Automated role created at ${unique}`,
            active: true
        });
        await RolePage.verifyRoleCreated();
    });

});