# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\functional\user-management\role\DeleteRole.test.ts >> Delete Role - Remove Existing Role
- Location: tests\functional\user-management\role\DeleteRole.test.ts:3:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#delete-modal-comfirm')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#delete-modal-comfirm')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
            - button "Inbox " [ref=e75] [cursor=pointer]:
              - img [ref=e77]
              - paragraph [ref=e79]:
                - text: Inbox
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
            - button "User Management " [ref=e125] [cursor=pointer]:
              - img [ref=e127]
              - paragraph [ref=e131]:
                - text: User Management
                - generic [ref=e132]: 
            - list [ref=e133]:
              - listitem [ref=e134]:
                - button "User" [ref=e135] [cursor=pointer]:
                  - paragraph [ref=e136]: User
              - listitem [ref=e137]:
                - button "Role & Permission" [ref=e138] [cursor=pointer]:
                  - paragraph [ref=e139]: Role & Permission
          - listitem [ref=e140]:
            - button "Configuration " [ref=e141] [cursor=pointer]:
              - img [ref=e143]
              - paragraph [ref=e147]:
                - text: Configuration
                - generic [ref=e148]: 
    - generic [ref=e151]:
      - generic [ref=e153]:
        - tab "Filter " [ref=e154]:
          - button "Filter " [expanded] [ref=e155] [cursor=pointer]:
            - text: Filter
            - generic [ref=e156]: 
        - tabpanel [ref=e157]:
          - paragraph [ref=e159]:
            - generic [ref=e161]:
              - generic [ref=e162]:
                - generic [ref=e163]: Search By
                - textbox "Search ...." [ref=e164]
              - generic [ref=e165]:
                - generic [ref=e166]: Status
                - combobox [ref=e167]:
                  - generic [ref=e169]:
                    - textbox "All"
                    - generic [ref=e170]: All
                  - text: ✓
              - generic [ref=e172]:
                - button "Reset" [ref=e173] [cursor=pointer]
                - button "Apply" [ref=e174] [cursor=pointer]
      - generic [ref=e177]:
        - generic [ref=e179]:
          - generic [ref=e180]: Role & Permission
          - button "Add New" [ref=e183] [cursor=pointer]
        - paragraph [ref=e185]:
          - generic [ref=e186]:
            - table [ref=e189]:
              - rowgroup [ref=e190]:
                - row "No Created Date Created By Role Status Actions" [ref=e191]:
                  - columnheader "No" [ref=e192]:
                    - generic [ref=e193]: "No"
                  - columnheader "Created Date" [ref=e194]:
                    - generic [ref=e195]: Created Date
                  - columnheader "Created By" [ref=e196]:
                    - generic [ref=e197]: Created By
                  - columnheader "Role" [ref=e198]:
                    - generic [ref=e199]: Role
                  - columnheader "Status" [ref=e200]:
                    - generic [ref=e201]: Status
                  - columnheader "Actions" [ref=e202]:
                    - generic [ref=e203]: Actions
              - rowgroup [ref=e204]:
                - row "1 12-08-2026 koev Automated Role 1786523086842 Active Edit Key" [ref=e205]:
                  - cell "1" [ref=e206]:
                    - generic [ref=e207]: "1"
                  - cell "12-08-2026" [ref=e208]
                  - cell "koev" [ref=e209]
                  - cell "Automated Role 1786523086842" [ref=e210]
                  - cell "Active" [ref=e211]:
                    - generic [ref=e213]: Active
                  - cell "Edit Key" [ref=e214]:
                    - generic [ref=e216]:
                      - img "Edit" [ref=e218] [cursor=pointer]
                      - img "Key" [ref=e220] [cursor=pointer]
                - row "2 12-08-2026 koev Automated Role 1786523080841 Active Edit Key" [ref=e221]:
                  - cell "2" [ref=e222]:
                    - generic [ref=e223]: "2"
                  - cell "12-08-2026" [ref=e224]
                  - cell "koev" [ref=e225]
                  - cell "Automated Role 1786523080841" [ref=e226]
                  - cell "Active" [ref=e227]:
                    - generic [ref=e229]: Active
                  - cell "Edit Key" [ref=e230]:
                    - generic [ref=e232]:
                      - img "Edit" [ref=e234] [cursor=pointer]
                      - img "Key" [ref=e236] [cursor=pointer]
                - row "3 15-05-2026 koev Tester Active Edit Key" [ref=e237]:
                  - cell "3" [ref=e238]:
                    - generic [ref=e239]: "3"
                  - cell "15-05-2026" [ref=e240]
                  - cell "koev" [ref=e241]
                  - cell "Tester" [ref=e242]
                  - cell "Active" [ref=e243]:
                    - generic [ref=e245]: Active
                  - cell "Edit Key" [ref=e246]:
                    - generic [ref=e248]:
                      - img "Edit" [ref=e250] [cursor=pointer]
                      - img "Key" [ref=e252] [cursor=pointer]
                - row "4 13-03-2026 admin HR Active Edit Key" [ref=e253]:
                  - cell "4" [ref=e254]:
                    - generic [ref=e255]: "4"
                  - cell "13-03-2026" [ref=e256]
                  - cell "admin" [ref=e257]
                  - cell "HR" [ref=e258]
                  - cell "Active" [ref=e259]:
                    - generic [ref=e261]: Active
                  - cell "Edit Key" [ref=e262]:
                    - generic [ref=e264]:
                      - img "Edit" [ref=e266] [cursor=pointer]
                      - img "Key" [ref=e268] [cursor=pointer]
                - row "5 13-03-2026 admin Content Edit Active Edit Key" [ref=e269]:
                  - cell "5" [ref=e270]:
                    - generic [ref=e271]: "5"
                  - cell "13-03-2026" [ref=e272]
                  - cell "admin" [ref=e273]
                  - cell "Content Edit" [ref=e274]
                  - cell "Active" [ref=e275]:
                    - generic [ref=e277]: Active
                  - cell "Edit Key" [ref=e278]:
                    - generic [ref=e280]:
                      - img "Edit" [ref=e282] [cursor=pointer]
                      - img "Key" [ref=e284] [cursor=pointer]
                - row "6 13-03-2026 admin Customer Service Active Edit Key" [ref=e285]:
                  - cell "6" [ref=e286]:
                    - generic [ref=e287]: "6"
                  - cell "13-03-2026" [ref=e288]
                  - cell "admin" [ref=e289]
                  - cell "Customer Service" [ref=e290]
                  - cell "Active" [ref=e291]:
                    - generic [ref=e293]: Active
                  - cell "Edit Key" [ref=e294]:
                    - generic [ref=e296]:
                      - img "Edit" [ref=e298] [cursor=pointer]
                      - img "Key" [ref=e300] [cursor=pointer]
                - row "7 13-03-2026 admin Web Manager Active Edit Key" [ref=e301]:
                  - cell "7" [ref=e302]:
                    - generic [ref=e303]: "7"
                  - cell "13-03-2026" [ref=e304]
                  - cell "admin" [ref=e305]
                  - cell "Web Manager" [ref=e306]
                  - cell "Active" [ref=e307]:
                    - generic [ref=e309]: Active
                  - cell "Edit Key" [ref=e310]:
                    - generic [ref=e312]:
                      - img "Edit" [ref=e314] [cursor=pointer]
                      - img "Key" [ref=e316] [cursor=pointer]
                - row "8 15-08-2024 admin Super Admin Active Full Access" [ref=e317]:
                  - cell "8" [ref=e318]:
                    - generic [ref=e319]: "8"
                  - cell "15-08-2024" [ref=e320]
                  - cell "admin" [ref=e321]
                  - cell "Super Admin" [ref=e322]
                  - cell "Active" [ref=e323]:
                    - generic [ref=e325]: Active
                  - cell "Full Access" [ref=e326]:
                    - generic [ref=e328]: Full Access
            - generic [ref=e329]:
              - generic [ref=e330]:
                - combobox [ref=e331]:
                  - option "25" [selected]
                  - option "50"
                  - option "75"
                  - option "100"
                  - option "Show a lot"
                - generic [ref=e332]: Showing 1 to 8 of 8 entries
              - menubar "Pagination" [ref=e334]:
                - listitem [ref=e335]:
                  - menuitem [disabled]: «
                - listitem [ref=e336]:
                  - menuitem [disabled]: ‹
                - menuitemradio "Go to page 1" [checked] [ref=e337] [cursor=pointer]: "1"
                - listitem [ref=e338]:
                  - menuitem [disabled]: ›
                - listitem [ref=e339]:
                  - menuitem [disabled]: »
  - dialog [ref=e341]:
    - generic [ref=e344]:
      - generic [ref=e345]: Delete
      - generic [ref=e346]:
        - text: Are you sure you want to delete Role & Permission
        - strong [ref=e347]: Automated Role 1786523086842
        - text: "?"
      - generic [ref=e348]:
        - button "No" [ref=e349] [cursor=pointer]
        - button "Yes" [ref=e350] [cursor=pointer]
```

# Test source

```ts
  54  |         if (checkboxHandle) {
  55  |             await checkboxHandle.evaluate((el, checked) => {
  56  |                 const input = el as HTMLInputElement;
  57  |                 if (input.checked !== checked) {
  58  |                     input.checked = checked;
  59  |                     input.dispatchEvent(new Event('change', { bubbles: true }));
  60  |                 }
  61  |             }, value);
  62  |             await expect(checkbox).toHaveJSProperty('checked', value, { timeout: 5000 });
  63  |             return;
  64  |         }
  65  | 
  66  |         await this.page.evaluate((selector, checked) => {
  67  |             const input = document.querySelector(selector) as HTMLInputElement;
  68  |             if (!input) throw new Error(`Checkbox not found: ${selector}`);
  69  |             if (input.checked !== checked) {
  70  |                 input.checked = checked;
  71  |                 input.dispatchEvent(new Event('change', { bubbles: true }));
  72  |             }
  73  |         }, '#status', value);
  74  |         await expect(checkbox).toHaveJSProperty('checked', value, { timeout: 5000 });
  75  |     }
  76  | 
  77  |     private async clickSaveButton(): Promise<void> {
  78  |         await this.SAVE_BUTTON.scrollIntoViewIfNeeded();
  79  |         await this.SAVE_BUTTON.waitFor({ state: 'visible', timeout: 5000 });
  80  |         const saveHandle = await this.SAVE_BUTTON.elementHandle();
  81  |         if (saveHandle) {
  82  |             await saveHandle.evaluate((button: HTMLElement) => button.click());
  83  |         } else {
  84  |             await this.SAVE_BUTTON.click({ force: true });
  85  |         }
  86  |     }
  87  | 
  88  |     async createRole(role: CreateRoleInput): Promise<void> {
  89  |         await this.ROLE_NAME_EDITBOX.fill(role.name);
  90  | 
  91  |         if (role.description) {
  92  |             await this.DESCRIPTION_TEXTAREA.fill(role.description);
  93  |         }
  94  | 
  95  |         if (role.active !== undefined) {
  96  |             await this.setCheckboxState(this.STATUS_CHECKBOX, !!role.active);
  97  |         }
  98  | 
  99  |         await this.clickSaveButton();
  100 | 
  101 |         await expect(this.SUCCESS_MESSAGE).toBeVisible({ timeout: testConfig.waitForElement }).catch(() => {
  102 |             throw new Error('Role creation did not produce a success message. Check form validation or save behavior.');
  103 |         });
  104 |     }
  105 | 
  106 |     async verifyRoleCreated(): Promise<void> {
  107 |         await expect(this.SUCCESS_MESSAGE).toBeVisible({ timeout: testConfig.waitForElement });
  108 |     }
  109 | 
  110 |     async editRole(roleName: string, role: EditRoleInput): Promise<void> {
  111 |         const row = this.roleRow(roleName);
  112 | 
  113 |         await expect(row).toBeVisible({ timeout: testConfig.waitForElement });
  114 |         await row.getByRole('img', { name: /edit/i }).click();
  115 |         await expect(this.ROLE_NAME_EDITBOX).toBeVisible();
  116 | 
  117 |         if (role.name) {
  118 |             await this.ROLE_NAME_EDITBOX.fill(role.name);
  119 |         }
  120 | 
  121 |         if (role.description !== undefined) {
  122 |             await this.DESCRIPTION_TEXTAREA.fill(role.description);
  123 |         }
  124 | 
  125 |         if (role.active !== undefined) {
  126 |             await this.setCheckboxState(this.STATUS_CHECKBOX, !!role.active);
  127 |             console.log(`DEBUG: STATUS_CHECKBOX checked after setCheckboxState = ${await this.STATUS_CHECKBOX.isChecked()}`);
  128 |         }
  129 | 
  130 |         await this.clickSaveButton();
  131 | 
  132 |         const successText = await this.SUCCESS_MESSAGE.innerText().catch(() => 'NO MESSAGE');
  133 |         console.log(`DEBUG: Success message after edit = ${successText}`);
  134 | 
  135 |         await expect(this.SUCCESS_MESSAGE).toBeVisible({ timeout: testConfig.waitForElement }).catch(() => {
  136 |             throw new Error('Role update did not produce a success message. Check form validation or save behavior.');
  137 |         });
  138 |     }
  139 | 
  140 |     async deleteRole(roleName: string): Promise<void> {
  141 |         const row = this.roleRow(roleName);
  142 |         const rowActionTargets = row.locator('button, a, [role="button"], img, svg');
  143 |         const deleteModal = this.page.locator('#delete-modal-comfirm');
  144 |         const confirmDeleteButton = deleteModal.getByRole('button', { name: /confirm|yes|delete/i });
  145 | 
  146 |         await expect(row).toBeVisible({ timeout: testConfig.waitForElement });
  147 | 
  148 |         const rowActionCount = await rowActionTargets.count();
  149 |         if (rowActionCount === 0) {
  150 |             throw new Error(`No action controls found for role row: ${roleName}`);
  151 |         }
  152 | 
  153 |         await rowActionTargets.nth(rowActionCount - 1).click();
> 154 |         await expect(deleteModal).toBeVisible();
      |                                   ^ Error: expect(locator).toBeVisible() failed
  155 |         await confirmDeleteButton.click();
  156 |     }
  157 | 
  158 |     async verifyRoleUpdated(): Promise<void> {
  159 |         await expect(this.SUCCESS_MESSAGE).toBeVisible({ timeout: testConfig.waitForElement });
  160 |     }
  161 | 
  162 |     async verifyRoleStatus(roleName: string, status: string): Promise<void> {
  163 |         const row = this.roleRow(roleName);
  164 |         await expect(row).toBeVisible({ timeout: testConfig.waitForElement });
  165 |         await expect(row).toContainText(status, { timeout: testConfig.waitForElement });
  166 |     }
  167 | 
  168 |     async verifyRoleDeleted(roleName: string): Promise<void> {
  169 |         await expect(this.SUCCESS_MESSAGE).toBeVisible({ timeout: testConfig.waitForElement });
  170 |         await expect(this.roleRow(roleName)).toHaveCount(0);
  171 |     }
  172 | 
  173 |     async verifyRoleIsVisible(roleName: string): Promise<void> {
  174 |         await expect(this.roleRow(roleName)).toBeVisible({ timeout: testConfig.waitForElement });
  175 |     }
  176 | }
  177 | 
```