import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private proceedCheckoutBtn: ElementFinder;
  private timeout: number = 5000;

  constructor () {
    // this way we ensure that we are selecting the .button-container
    // within the layer_cart (it is safer because it is an id)
    this.proceedCheckoutBtn = $('#layer_cart .button-container > a');
  }

  public async proceedToCheckOut(): Promise<void> {
    await browser.wait(
      ExpectedConditions.visibilityOf(this.proceedCheckoutBtn),
      this.timeout);
    await this.proceedCheckoutBtn.click();
  }
}
