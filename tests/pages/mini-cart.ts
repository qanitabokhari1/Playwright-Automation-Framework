import { expectElementToBeVisible } from 'vasu-playwright-utils';

export class MiniCart {
  private readonly cartCount = '.shopping_cart_badge';

  public async verifyMiniCartCount(expectedCount: string): Promise<void> {
    await expectElementToBeVisible(this.cartCount, `Mini cart count should be ${expectedCount}`);
  }
}
