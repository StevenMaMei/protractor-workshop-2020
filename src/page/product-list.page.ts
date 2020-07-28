import { $, ElementFinder, browser, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private proceedCheckoutBtn: ElementFinder;
  private timeout: number = 5000;

  constructor () {
    this.proceedCheckoutBtn = $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckOut(): Promise<void> {
    await browser.wait(
      ExpectedConditions.visibilityOf(this.proceedCheckoutBtn),
      this.timeout);
    await this.proceedCheckoutBtn.click();
  }
}
