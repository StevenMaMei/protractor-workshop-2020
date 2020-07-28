import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private proceedCheckoutBtn: ElementFinder;

  constructor () {
    this.proceedCheckoutBtn = $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckOut(): Promise<void> {
    await this.proceedCheckoutBtn.click();
  }
}
