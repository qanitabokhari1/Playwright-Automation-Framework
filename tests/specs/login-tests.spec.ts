import { test } from '@fixturesetup';

test.describe.configure({ mode: 'parallel' });

test.describe('Sauce Demo Login Tests @smoke', () => {
  test.beforeEach('Navigating to sauce demo page', async ({ loginPage }) => {
    await loginPage.navigateToSauceDemoLoginPage();
  });

  test('Successful login displays Products Page', async ({ loginPage, productsPage }) => {
    await loginPage.loginWithValidCredentials();
    await productsPage.verifyProductsPageIsDisplayed();
  });

  test('Invalid login shows error message', async ({ loginPage, productsPage }) => {
    await loginPage.loginWithInvalidCredentials();
    await loginPage.verifyLoginPageIsDisplayed();
    await productsPage.verifyProductsPageIsNotDisplayed();
  });
});
