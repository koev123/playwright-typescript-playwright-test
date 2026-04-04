# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\functional\CreateUser.test.ts >> Create User - Navigate to Add New User Page
- Location: tests\functional\CreateUser.test.ts:4:5

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.click: Test timeout of 120000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Saveqq' })

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - navigation [ref=e5]:
    - list [ref=e6]:
      - listitem [ref=e7]:
        - button "" [ref=e8] [cursor=pointer]:
          - generic [ref=e9]: 
      - listitem [ref=e10]:
        - link "AdminLTE Logo" [ref=e11] [cursor=pointer]:
          - /url: ../../index3.html
          - img "AdminLTE Logo" [ref=e12]
    - list [ref=e13]:
      - listitem [ref=e14] [cursor=pointer]:
        - generic [ref=e15]:
          - img "User Image" [ref=e16]
          - text: Koev
          - img "Notifications" [ref=e17]
  - complementary [ref=e18]:
    - link "Yescar Logo" [ref=e19] [cursor=pointer]:
      - /url: index3.html
      - img "Yescar Logo" [ref=e20]
    - navigation [ref=e22]:
      - menu [ref=e23]:
        - listitem [ref=e24]:
          - button "Dashboard" [ref=e25] [cursor=pointer]:
            - img [ref=e27]
            - paragraph [ref=e29]: Dashboard
        - listitem [ref=e30]:
          - button "Page Management" [ref=e31] [cursor=pointer]:
            - img [ref=e33]
            - paragraph [ref=e35]: Page Management
        - listitem [ref=e36]:
          - button "Banner" [ref=e37] [cursor=pointer]:
            - img [ref=e39]
            - paragraph [ref=e41]: Banner
        - listitem [ref=e42]:
          - button "Widget" [ref=e43] [cursor=pointer]:
            - img [ref=e45]
            - paragraph [ref=e47]: Widget
        - listitem [ref=e48]:
          - button "Slider Management" [ref=e49] [cursor=pointer]:
            - img [ref=e51]
            - paragraph [ref=e53]: Slider Management
        - listitem [ref=e54]:
          - button "Promotion" [ref=e55] [cursor=pointer]:
            - img [ref=e57]
            - paragraph [ref=e59]: Promotion
        - listitem [ref=e60]:
          - button "Car Management" [ref=e61] [cursor=pointer]:
            - img [ref=e63]
            - paragraph [ref=e73]: Car Management
        - listitem [ref=e74]:
          - button "Inbox (66) " [ref=e75] [cursor=pointer]:
            - img [ref=e77]
            - paragraph [ref=e79]:
              - text: Inbox (66)
              - generic [ref=e80]: 
        - listitem [ref=e81]:
          - button "Customer Review" [ref=e82] [cursor=pointer]:
            - img [ref=e84]
            - paragraph [ref=e90]: Customer Review
        - listitem [ref=e91]:
          - button "News " [ref=e92] [cursor=pointer]:
            - img [ref=e94]
            - paragraph [ref=e103]:
              - text: News
              - generic [ref=e104]: 
        - listitem [ref=e105]:
          - button "Customer" [ref=e106] [cursor=pointer]:
            - img [ref=e108]
            - paragraph [ref=e110]: Customer
        - listitem [ref=e111]:
          - button "Career " [ref=e112] [cursor=pointer]:
            - img [ref=e114]
            - paragraph [ref=e116]:
              - text: Career
              - generic [ref=e117]: 
        - listitem [ref=e118]:
          - button "FAQ" [ref=e119] [cursor=pointer]:
            - img [ref=e121]
            - paragraph [ref=e123]: FAQ
        - listitem [ref=e124]:
          - button "User Management ":
            - generic:
              - img
            - paragraph:
              - text: User Management
              - generic: 
          - list [ref=e125]:
            - listitem [ref=e126]:
              - button "User" [ref=e127] [cursor=pointer]:
                - paragraph [ref=e128]: User
            - listitem [ref=e129]:
              - button "Role & Permission" [ref=e130] [cursor=pointer]:
                - paragraph [ref=e131]: Role & Permission
        - listitem [ref=e132]:
          - button "Configuration " [ref=e133] [cursor=pointer]:
            - img [ref=e135]
            - paragraph [ref=e139]:
              - text: Configuration
              - generic [ref=e140]: 
  - generic [ref=e147]:
    - generic [ref=e150]: Add New
    - paragraph [ref=e152]:
      - generic [ref=e153]:
        - generic [ref=e154]:
          - generic [ref=e156]:
            - generic [ref=e157]: Staff ID
            - textbox "Enter Staff ID" [ref=e158]: wow
          - generic [ref=e160]:
            - generic [ref=e161]: Full Name
            - textbox "Enter Full Name" [ref=e162]: test
          - generic [ref=e164]:
            - generic [ref=e165]: Username
            - textbox "Enter Username" [ref=e166]: test
          - generic [ref=e168]:
            - generic [ref=e169]: Phone Number
            - textbox "Enter Phone Number" [ref=e170]: "09866655"
          - group [ref=e172]:
            - generic [ref=e173]:
              - generic [ref=e174]: Email (Optional)
              - textbox "Enter Email" [ref=e175]: email@gmail.com
          - group [ref=e177]:
            - generic [ref=e178]:
              - generic [ref=e179]: Gender (Optional)
              - combobox [ref=e180]:
                - generic [ref=e182]:
                  - textbox "Select Gender"
                  - generic [ref=e183]: Select Gender
                - text: ✓
          - generic [ref=e185]:
            - generic [ref=e186]: Password
            - generic [ref=e187]:
              - textbox "Password" [ref=e188]:
                - /placeholder: Enter password
                - text: "12345678"
              - button "Toggle password visibility" [ref=e190] [cursor=pointer]:
                - generic [ref=e191]: 
          - generic [ref=e193]:
            - generic [ref=e194]: Confirm Password
            - generic [ref=e195]:
              - textbox "Confirm password" [ref=e196]: "12345678"
              - button "Toggle confirm password visibility" [ref=e198] [cursor=pointer]:
                - generic [ref=e199]: 
          - group [ref=e201]:
            - generic [ref=e202]:
              - generic [ref=e203]: Department (Optional)
              - combobox [ref=e204]:
                - generic [ref=e206]:
                  - textbox "Select Department"
                  - generic [ref=e207]: Select Department
                - text: ✓
          - group [ref=e209]:
            - generic [ref=e210]:
              - generic [ref=e211]: Status
              - combobox [ref=e212]:
                - generic [ref=e214]:
                  - textbox "Select Status"
                  - generic [ref=e216]: Active
                - text: ✗
        - generic [ref=e217]:
          - heading "Role" [level=6] [ref=e219]
          - generic [ref=e222]:
            - checkbox "Super Admin" [checked] [ref=e223]
            - generic [ref=e224]: Super Admin
          - generic [ref=e226]:
            - checkbox "Web Manager" [checked] [active] [ref=e227]
            - generic [ref=e228]: Web Manager
          - generic [ref=e230]:
            - checkbox "Customer Service" [ref=e231]
            - generic [ref=e232]: Customer Service
          - generic [ref=e234]:
            - checkbox "Content Edit" [ref=e235]
            - generic [ref=e236]: Content Edit
          - generic [ref=e238]:
            - checkbox "HR" [ref=e239]
            - generic [ref=e240]: HR
      - generic [ref=e241]:
        - button "Save" [ref=e243] [cursor=pointer]
        - button "Back" [ref=e244] [cursor=pointer]
```

# Test source

```ts
  1  | import test from '../../lib/BaseTest';
  2  | import { CreateUserPage } from '../../pageFactory/pageRepository/CreateUserPage';
  3  | 
  4  | test('Create User - Navigate to Add New User Page', async ({ page, context }) => {
  5  |   
  6  | 
  7  |   // 1️⃣ Navigate to the real web-admin login page
  8  |   await test.step('Navigate to Login Page', async () => {
  9  |     // Replace this with your real QA URL
  10 |     await page.goto('https://web-admin.yescarauto.com/login');
  11 |     await page.waitForLoadState('networkidle'); // Wait until network is idle
  12 |   });
  13 | 
  14 |   // 2️⃣ Login step
  15 |   await test.step('Login to system', async () => {
  16 |     // Wait until username input is visible before filling
  17 |     await page.waitForSelector('#username', { state: 'visible' });
  18 |     await page.fill('#username', 'koev'); // Replace with actual username
  19 |     await page.fill('#password', 'koev@123'); // Replace with actual password
  20 |     await page.click('button[type="submit"]');
  21 | 
  22 |     // Optional: wait until the dashboard or Users module is loaded
  23 |   //  await page.waitForSelector('#welcome-page', { state: 'visible', timeout: 60000 });
  24 |   });
  25 | 
  26 |   // 3️⃣ Navigate to Users > Add New
  27 |   await test.step('Navigate to Add New User Page', async () => {
  28 |     // Click User Management
  29 |     await page.getByRole('button', { name: /User Management/i }).click();
  30 |     await page.getByRole('button', { name: /User/i }).click();
  31 | 
  32 |     // Click User submenu (adjust text if needed)
  33 |     // await page.getByText('User', { exact: true }).click();
  34 | 
  35 |     // // Click Add New button
  36 |     await page.locator('//button[contains(., "Add New")]').click();
  37 | 
  38 |     // instantiate page object
  39 |     const createUserPage = new CreateUserPage(page, context);
  40 | 
  41 |     await page.getByRole('textbox', { name: 'Enter Staff ID' }).click();
  42 |     await page.getByRole('textbox', { name: 'Enter Staff ID' }).fill('wow');
  43 |     await page.getByRole('textbox', { name: 'Enter Full Name' }).click();
  44 |     await page.getByRole('textbox', { name: 'Enter Full Name' }).fill('test');
  45 |     await page.getByRole('textbox', { name: 'Enter Username' }).click();
  46 |     await page.getByRole('textbox', { name: 'Enter Username' }).fill('test');
  47 |     await page.getByRole('textbox', { name: 'Enter Phone Number' }).click();
  48 |     await page.getByRole('textbox', { name: 'Enter Phone Number' }).fill('09866655');
  49 |     await page.getByRole('textbox', { name: 'Enter Email' }).click();
  50 |     await page.getByRole('textbox', { name: 'Enter Email' }).fill('email@gmail.com');
  51 |     await page.locator('.multiselect__tags').first().click();
  52 |     await page.locator('div:nth-child(6)').first().click();
  53 |     await page.getByRole('textbox', { name: 'Password', exact: true }).click();
  54 |     await page.getByRole('textbox', { name: 'Password', exact: true }).fill('12345678');
  55 |     await page.getByRole('textbox', { name: 'Confirm password' }).click();
  56 |     await page.getByRole('textbox', { name: 'Confirm password' }).fill('12345678');
  57 |     await page.getByText('Super Admin').click();
  58 |     await page.getByText('Web Manager').click();
> 59 |     await page.getByRole('button', { name: 'Saveqq' }).click();
     |                                                        ^ Error: locator.click: Test timeout of 120000ms exceeded.
  60 |     
  61 |    
  62 |   });
  63 | 
  64 | 
  65 | });
  66 | 
```