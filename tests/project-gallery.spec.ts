import { test, expect } from '@playwright/test';

test('project media switches between its video and screenshot', async ({ page }) => {
  await page.goto('/');
  const project = page.getByRole('article', { name: 'Web Admin', exact: true });
  await expect(project.locator('video')).toBeAttached();
  await project.getByRole('button', { name: 'Show image 1 of Web Admin', exact: true }).click();
  await expect(project.locator('video')).toHaveCount(0);
  await expect(project.getByRole('region', { name: 'Web Admin gallery' }).locator('img')).toBeVisible();
  await project.getByRole('button', { name: 'Play Web Admin video' }).click();
  await expect(project.locator('video')).toBeVisible();
  await expect(project.getByRole('button', { name: 'Play Web Admin video' })).toHaveAttribute('aria-pressed', 'true');
});

test('desktop hero and projects fit the viewport', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: 'test-results/desktop-redesign.png' });
});
