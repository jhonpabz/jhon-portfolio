import { defineConfig } from '@playwright/test';

const baseURL = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:3100';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL,
    channel: 'chrome',
    viewport: { width: 1280, height: 900 },
  },
  webServer: {
    command: 'npm run dev -- --port 3100',
    url: baseURL,
    timeout: 120_000,
    reuseExistingServer: Boolean(process.env.PLAYWRIGHT_BASE_URL),
  },
});
