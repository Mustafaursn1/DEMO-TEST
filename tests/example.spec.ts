import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/'); 

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click(); 

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

/**
 * npx playwright test
 * npx playwright show-report
 * npx playwright test --project=chromium --headed
 * npx playwright test example.spec.ts  --project=chromium
 * npx playwright test -g "has title" --project=chromium ->only one test for execut 
 * to ignore -->test.skip
 * 
 * 
 */
