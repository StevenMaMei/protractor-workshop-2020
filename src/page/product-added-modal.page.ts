import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductAddedPage {
  private addToCartBtn: ElementFinder;
  private timeout: number = 5000;

  constructor () {
    // in this way we can select another product in the list by modifying the nth-child
    // also, a.button.ajax_add_to_cart_button is enough
    this.addToCartBtn = $('#center_column ul li:nth-child(1) a.button.ajax_add_to_cart_button');
  }
  public async addProduct(): Promise<void> {
    await browser.wait(
      ExpectedConditions.visibilityOf(this.addToCartBtn),
      this.timeout);
    await this.addToCartBtn.click();
  }
}
