import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmOrderBtn: ElementFinder;

  constructor () {
    // we can remove span
    this.confirmOrderBtn = $('#cart_navigation button');
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmOrderBtn.click();
  }
}
