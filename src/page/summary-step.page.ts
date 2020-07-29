import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedCheckoutBtn: ElementFinder;

  constructor () {
    // it is better to use attributes
    this.proceedCheckoutBtn = $('.cart_navigation a[title="Proceed to checkout"]');
  }

  public async completeSummaryStep(): Promise<void> {
    await this.proceedCheckoutBtn.click();
  }
}
