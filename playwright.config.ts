import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    baseURL: 'https://atarapygina.wixsite.com/qa-portfolio',
    screenshot: 'on',
    video: 'on',
    trace: 'on',

    launchOptions: {
      slowMo: 1000,
    },
  },
});