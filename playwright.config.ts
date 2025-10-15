import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import path from 'path';
import { ACTION_TIMEOUT, EXPECT_TIMEOUT, NAVIGATION_TIMEOUT, TEST_TIMEOUT } from 'vasu-playwright-utils';

export const BASE_URL = process.env.URL || 'https://www.saucedemo.com';
export const STORAGE_STATE_PATH = path.join(__dirname, 'playwright/.auth');

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 3 : 6,
  reporter: [['html', { open: 'never' }], ['dot']],
  globalSetup: require.resolve('./test-setup/global-setup'),
  globalTeardown: require.resolve('./test-setup/global-teardown'),
  timeout: TEST_TIMEOUT,
  expect: {
    timeout: EXPECT_TIMEOUT,
  },
  use: {
    headless: true,
    ignoreHTTPSErrors: true,
    acceptDownloads: true,
    baseURL: BASE_URL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    actionTimeout: ACTION_TIMEOUT,
    navigationTimeout: NAVIGATION_TIMEOUT,
  },

  projects: [
    {
      name: 'setup',
      testMatch: '**/storage-setup.ts',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1600, height: 1000 },
        launchOptions: {
          args: ['--disable-web-security'],
          slowMo: 0,
        },
      },
    },
    {
      name: 'chromium',
      dependencies: ['setup'],
      use: {
        viewport: null,
        launchOptions: {
          args: ['--disable-web-security', '--start-maximized'],
          slowMo: 0,
          headless: false,
        },
      },
    },
    {
      name: 'chromiumheadless',
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1600, height: 1000 },
        launchOptions: {
          args: ['--disable-web-security'],
          slowMo: 0,
          headless: true,
        },
      },
    },
  ],
});
