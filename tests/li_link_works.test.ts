import { test, expect } from '@playwright/test';

test('LinkedIn link points to a valid LinkedIn URL', async ({ page }) => {
  await page.goto('https://atarapygina.wixsite.com/qa-portfolio');

  const linkedinLink = page.getByRole('link', {
    name: /Connect on LinkedIn/i
  });

  await expect(linkedinLink).toBeVisible();

  const href = await linkedinLink.getAttribute('href');

  // Negative checks
  expect(href).toBeTruthy();
  expect(href).not.toBe('#');
  expect(href).not.toBe('');

  // Verify that the link points to LinkedIn
  expect(href).toContain('linkedin.com');
});