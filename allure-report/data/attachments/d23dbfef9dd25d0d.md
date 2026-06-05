# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\visualComparison\visualComparision.test.ts >> Verify Elements Page.
- Location: tests\visualComparison\visualComparision.test.ts:3:5

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected) failed

  5519 pixels (ratio 0.01 of all image pixels) are different.

  Snapshot: MainPage.png

```

# Page snapshot

```yaml
- generic [ref=e7]:
  - paragraph [ref=e8]:
    - img "Yescar Logo" [ref=e9]
  - paragraph [ref=e10]: User Login
  - generic [ref=e11]:
    - generic [ref=e12]:
      - generic [ref=e13]: Username *
      - generic [ref=e14]:
        - textbox "Username *" [ref=e15]:
          - /placeholder: Enter username
        - generic [ref=e18] [cursor=pointer]: 
    - generic [ref=e19]:
      - generic [ref=e20]: Password *
      - generic [ref=e21]:
        - textbox "Password *" [ref=e22]:
          - /placeholder: Enter password
        - generic [ref=e25] [cursor=pointer]: 
    - link "Forgot Password?" [ref=e28] [cursor=pointer]:
      - /url: "#"
    - button "Sign In" [ref=e31] [cursor=pointer]
```

# Test source

```ts
  1 | import test from '@lib/BaseTest';
  2 | import { expect } from '@playwright/test';
  3 | test(`Verify Elements Page.`, async ({ page, loginPage }) => {
  4 |     await loginPage.navigateToURL();
> 5 |     expect(await page.screenshot()).toMatchSnapshot('MainPage.png');
    |                                     ^ Error: expect(Buffer).toMatchSnapshot(expected) failed
  6 | });
```