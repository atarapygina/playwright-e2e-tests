import { test, expect } from '@playwright/test';

test('LinkedIn link opens the correct profile', async ({ page }) => {
  await page.goto('https://atarapygina.wixsite.com/qa-portfolio');

  const linkedinLink = page.getByRole('link', { name: /LinkedIn/i });

  await expect(linkedinLink).toBeVisible();

  const newPagePromise = page.waitForEvent('popup');

  await linkedinLink.click();

  const newPage = await newPagePromise;

  await newPage.waitForLoadState('domcontentloaded');

  await expect(newPage).toHaveURL(/linkedin\.com/);
});