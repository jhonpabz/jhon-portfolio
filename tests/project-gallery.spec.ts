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

test('wedding invitation leads side projects and cycles through all eight images', async ({ page }) => {
  await page.goto('/');
  const category = page.getByRole('region', { name: 'PERSONAL/SIDE PROJECT', exact: true });
  const project = category.getByRole('article').first();
  await expect(project).toHaveAttribute('aria-label', /Wedding Invitation/);
  await expect(project.getByRole('button', { name: /^Show image/ })).toHaveCount(8);
  const gallery = project.getByRole('region');
  await expect(gallery.locator('img')).toHaveAttribute('alt', /sealed red envelope/);
  await project.getByRole('button', { name: /^Next image/ }).click();
  await expect(gallery.locator('img')).toHaveAttribute('alt', /Opened envelope/);
  await project.getByRole('button', { name: /^Show image 8 / }).click();
  await expect(gallery.locator('img')).toHaveAttribute('alt', /Wedding countdown/);
  await gallery.focus();
  await page.keyboard.press('ArrowRight');
  await expect(gallery.locator('img')).toHaveAttribute('alt', /sealed red envelope/);
  await expect(project.getByRole('link', { name: /^Visit / })).toHaveAttribute('href', 'https://rachelle-samson.vercel.app/');
  await expect(project.getByRole('link', { name: /code on GitHub/ })).toHaveAttribute('href', 'https://github.com/jhonpabz/rachelle-samson');
});
