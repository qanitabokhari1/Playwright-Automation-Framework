import { test } from '@fixturesetup';
import { standardUserCredentials } from '@testdata/sauce-demo-test-data';

test.describe.configure({ mode: 'parallel' });

test.describe('Sauce Demo Cart Tests @smoke', () => {
  test.beforeEach('Login and navigate to products page', async ({ loginPage, productsPage }) => {
    await loginPage.navigateToSauceDemoLoginPage();
    await loginPage.loginWithValidCredentials(standardUserCredentials);
    await productsPage.verifyProductsPageIsDisplayed();
  });

  test('Add product to cart updates mini cart count', async ({ productsPage, miniCartPage }) => {
    await productsPage.addToCartByProductNumber(1);
    await miniCartPage.verifyMiniCartCount('1');
  });
});
