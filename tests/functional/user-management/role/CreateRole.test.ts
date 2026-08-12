import test from '@lib/BaseTest';

test('Create Role - Add a New Role', async ({ RolePage }) => {
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

    await test.step('Navigate to Create Role page', async () => {
        await RolePage.navigateToCreateRolePage();
        await RolePage.verifyCreateRolePageIsVisible();
    });

    await test.step('Fill and submit create role form', async () => {
        await RolePage.createRole({
            name: roleName,
            description: `Automated role created at ${unique}`,
            active: true
        });
    });

    await test.step('Verify role created successfully', async () => {
        await RolePage.verifyRoleCreated();
    });
});
