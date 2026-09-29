import { test, expect } from '@playwright/test';

test('portfolio page displays key QA information', async ({ page }) => {
  await page.goto('https://atarapygina.wixsite.com/qa-portfolio');

  // Page loads successfully
  await expect(page).toHaveURL(/qa-portfolio/);

  // Main page heading
  await expect(
    page.getByRole('heading', { name: /Your QA/i })
  ).toBeVisible();

  // Main introduction contains QA-related information
  const pageContent = page.locator('body');

  await expect(pageContent).toContainText(/QA Engineer/i);
  await expect(pageContent).toContainText(/years of experience/i);

  // Important testing areas
  await expect(pageContent).toContainText(/functional/i);
  await expect(pageContent).toContainText(/API/i);
  await expect(pageContent).toContainText(/end-to-end/i);

  // Important tools
  await expect(pageContent).toContainText(/Postman/i);
  await expect(pageContent).toContainText(/SQL/i);
  await expect(pageContent).toContainText(/Playwright/i);

  // LinkedIn CTA exists
  await expect(
    page.getByRole('link', { name: /LinkedIn/i })
  ).toBeVisible();
});