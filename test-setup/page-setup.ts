import { test as baseTest, expect } from '@playwright/test';
import { setPage } from 'vasu-playwright-utils';

export const test = baseTest.extend<{ testHook: void }>({
  testHook: [
    async ({ page }, use) => {
      setPage(page);
      await use();
    },
    { auto: true },
  ],
});

export { expect };
