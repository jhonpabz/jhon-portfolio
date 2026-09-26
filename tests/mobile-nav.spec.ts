import { test, expect } from '@playwright/test';

test('mobile navigation follows taps and scrolling without covering the last link', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Mobile navigation' });
  await expect(nav).toBeVisible();
  for (const name of ['Experience', 'Projects', 'About']) {
    await nav.getByRole('link', { name, exact: true }).click();
    await expect(nav.getByRole('link', { name, exact: true })).toHaveAttribute('aria-current', 'location');
  }
  await page.locator('#experience').scrollIntoViewIfNeeded();
  await page.evaluate(() => document.getElementById('experience')!.scrollIntoView());
  await expect(nav.getByRole('link', { name: 'Experience' })).toHaveAttribute('aria-current', 'location');
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await expect(nav.getByRole('link', { name: 'Projects' })).toHaveAttribute('aria-current', 'location');
  const lastLink = await page.getByRole('link', { name: 'View More Projects' }).boundingBox();
  const navBox = await nav.boundingBox();
  expect(lastLink!.y + lastLink!.height).toBeLessThan(navBox!.y);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: 'test-results/mobile-nav-dark.png', fullPage: false });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.getByRole('button', { name: 'Toggle theme' }).click();
  await expect(page.locator('html')).toHaveClass('light');
  await page.screenshot({ path: 'test-results/mobile-nav-light.png', fullPage: false });
  await page.setViewportSize({ width: 1280, height: 900 });
  await expect(nav).toBeHidden();
  expect(errors).toEqual([]);
});
