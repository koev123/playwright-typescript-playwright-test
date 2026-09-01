import test from '@lib/BaseTest';

test('Edit Role - Update Existing Role Details', async ({ RolePage }) => {
    const unique = Date.now();
    const originalRoleName = `Automated Role ${unique}`;

    await test.step('Navigate to login page', async () => {
        await RolePage.navigateToLoginPage();
        await RolePage.verifyLoginPageIsVisible();
    });

    await test.step('Login to system', async () => {
        await RolePage.loginToApplication();
        await RolePage.verifyUserLoggedIn();
    });

    await test.step('Create a role to edit', async () => {
        await RolePage.navigateToCreateRolePage();
        await RolePage.verifyCreateRolePageIsVisible();

        await RolePage.createRole({
            name: originalRoleName,
            description: `Original automated role created at ${unique}`,
            active: false
        });

        await RolePage.verifyRoleCreated();
    });

    await test.step('Edit the created role', async () => {
        await RolePage.navigateToRoleManagementPage();

        await RolePage.editRole(originalRoleName, {
            description: `Updated automated role at ${unique}`,
            active: true
        });

        await RolePage.verifyRoleUpdated();
    });

    await test.step('Verify updated role is visible', async () => {
        await RolePage.navigateToRoleManagementPage();

        await RolePage.verifyRoleStatus(
            originalRoleName,
            'Active'  // Role was updated to active: true
        );
    });
});