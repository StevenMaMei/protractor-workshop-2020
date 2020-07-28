import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private confirmOrderBtn: ElementFinder;

  constructor () {
    this.confirmOrderBtn = $('#cart_navigation > button > span');
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmOrderBtn.click();
  }
}
