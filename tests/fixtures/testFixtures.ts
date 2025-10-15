import { test as baseTest } from '@pagesetup';
import { LoginPage } from '@pages/login-page';
import { ProductsPage } from '@pages/products-page';
import { MiniCart } from '@pages/mini-cart';

export const test = baseTest.extend<{ loginPage: LoginPage; productsPage: ProductsPage; miniCartPage: MiniCart }>({
  loginPage: async ({ page: _page }, use) => {
    await use(new LoginPage());
  },
  productsPage: async ({ page: _page }, use) => {
    await use(new ProductsPage());
  },
  miniCartPage: async ({ page: _page }, use) => {
    await use(new MiniCart());
  },
});

export const expect = test.expect;
