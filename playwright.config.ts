import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:3100',
    channel: 'chrome',
    viewport: { width: 1280, height: 900 },
  },
  webServer: {
    command: 'npm run dev -- --port 3100',
    url: 'http://localhost:3100',
    timeout: 120_000,
    reuseExistingServer: false,
  },
});
