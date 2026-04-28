import test from '@lib/BaseTest';
import { expect } from "@playwright/test";

test(`Verify Page Accessibility`, async ({ page, makeAxeBuilder }) => {
    await page.goto('https://web-admin.yescarauto.com/login');
    const accessibilityScanResults = await makeAxeBuilder.analyze();
    // Automatically uses the shared AxeBuilder configuration,
    expect(accessibilityScanResults.violations).toEqual([]);
});