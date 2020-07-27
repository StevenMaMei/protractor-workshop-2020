import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedCheckoutBtn: ElementFinder;

  constructor () {
    this.proceedCheckoutBtn = $('.cart_navigation span');
  }

  public async completeSummaryStep(): Promise<void> {
    await this.proceedCheckoutBtn.click();
  }
}
