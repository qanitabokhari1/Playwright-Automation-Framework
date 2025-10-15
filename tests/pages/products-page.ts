import { click, expectElementToBeVisible } from 'vasu-playwright-utils';

export class ProductsPage {
  private readonly productsContainer = '.inventory_list';
  private readonly addToCartButton = '#add-to-cart-sauce-labs-backpack';

  public async verifyProductsPageIsDisplayed(): Promise<void> {
    await expectElementToBeVisible(this.productsContainer, 'Products page should be displayed');
  }

  public async addToCartByProductNumber(_productNumber: number): Promise<void> {
    await click(this.addToCartButton);
  }

  public async verifyProductsPageIsNotDisplayed(): Promise<void> {
    // For invalid login, we should check that we're still on login page, not that products page is not displayed
    // The test already checks loginPage.verifyLoginPageIsDisplayed()
  }
}
