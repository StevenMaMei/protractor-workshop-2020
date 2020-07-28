import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedPage {
  private addToCartBtn: ElementFinder;
  private timeout: number = 5000;

  constructor () {
    this.addToCartBtn = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addProduct(): Promise<void> {
    await browser.wait(
      ExpectedConditions.visibilityOf(this.addToCartBtn),
      this.timeout);
    await this.addToCartBtn.click();
  }
}
