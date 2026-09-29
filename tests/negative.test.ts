import { test, expect } from '@playwright/test';

test('non-existent portfolio page returns 404', async ({ page }) => {
  const response = await page.goto(
    'https://atarapygina.wixsite.com/qa-portfolio/does-not-exist'
  );

  expect(response?.status()).toBe(404);
});