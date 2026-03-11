import test from '@lib/BaseTest';
import CreateUserPage from '@lib/CreateUserPage';

test(
  'Verify Create User Page',
  { tag: '@Smoke' },
  async ({ page, loginPage, webActions }) => {
    const createUserPage = new CreateUserPage(page);

    // 1️⃣ Login
    await loginPage.navigateToURL();

    // 2️⃣ Navigate to Security → User
    await webActions.clickByText('Security');
    await webActions.clickByText('User');

    // 3️⃣ Verify Create User page loaded
    await createUserPage.verifyCreateUserPageLoaded();

    // 4️⃣ Enter User Information
    await createUserPage.enterUserInformation(
      'koevom',
      'Password@123',
      'Koev Om'
    );

    // 5️⃣ Select Group
    await createUserPage.selectDropdownOption(
      createUserPage.GROUP_DROPDOWN,
      'Admin'
    );

    // 6️⃣ Select Role
    await createUserPage.selectDropdownOption(
      createUserPage.ROLES_DROPDOWN,
      'Manager'
    );

    // 7️⃣ Select Admin Portal = No
    await createUserPage.selectDropdownOption(
      createUserPage.ADMIN_PORTAL_DROPDOWN,
      'No'
    );

    // 8️⃣ Select POS = No
    await createUserPage.selectDropdownOption(
      createUserPage.POS_DROPDOWN,
      'No'
    );

    // 9️⃣ Select Status = Active
    await createUserPage.selectDropdownOption(
      createUserPage.STATUS_DROPDOWN,
      'Active'
    );

    // 🔟 Enter Profile Information
    await createUserPage.enterProfileInformation(
      'Koev Om',
      '1998-01-01',
      '+85512345678',
      'koev@test.com',
      'QA Engineer'
    );

    // 1️⃣1️⃣ Select Gender
    await createUserPage.selectDropdownOption(
      createUserPage.GENDER_DROPDOWN,
      'Other'
    );

    // 1️⃣2️⃣ Select Store / Warehouse
    await createUserPage.selectDropdownOption(
      createUserPage.STORE_WAREHOUSE_DROPDOWN,
      'All Store & Warehouse'
    );

    // 1️⃣3️⃣ Save user
    await createUserPage.clickSave();
  }
);
