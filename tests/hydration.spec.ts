import { test, expect } from '@playwright/test';

for (const theme of ['default', 'light', 'dark', 'system']) {
  test(`hydrates and switches themes with ${theme} preference`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error' || /hydration|element\.ref|legacyBehavior/i.test(message.text())) {
        errors.push(message.text());
      }
    });
    await page.emulateMedia({ colorScheme: 'light' });
    await page.addInitScript(preference => {
      if (preference !== 'default') localStorage.setItem('theme', preference);
    }, theme);
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'View More Projects' })).toBeAttached();
    expect(errors).toEqual([]);
    const initialTheme = theme === 'default' || theme === 'dark' ? 'dark' : 'light';
    await expect(page.locator('html')).toHaveClass(initialTheme);
    const toggle = page.getByRole('button', { name: 'Toggle theme' }).first();
    await toggle.click();
    await expect(page.locator('html')).toHaveClass(initialTheme === 'dark' ? 'light' : 'dark');
    await toggle.click();
    await expect(page.locator('html')).toHaveClass(initialTheme);
    await expect(page.locator('a button, a a, p div')).toHaveCount(0);
    await expect(page.getByRole('link', { name: 'View More Projects' })).toHaveAttribute('target', '_blank');
    await page.locator('#projects').last().scrollIntoViewIfNeeded();
    expect(errors).toEqual([]);
  });
}
