import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedCheckoutBtn: ElementFinder;

  constructor () {
    // it is more meaningful if we use also an 'a'
    this.proceedCheckoutBtn = $('.cart_navigation a span');
  }

  public async completeSummaryStep(): Promise<void> {
    await this.proceedCheckoutBtn.click();
  }
}
