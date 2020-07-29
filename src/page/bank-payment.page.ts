import { ElementFinder, element, by } from 'protractor';

export class BankPaymentPage {
  private confirmOrderBtn: ElementFinder;

  constructor () {
    // we can remove span
    this.confirmOrderBtn = element(by.cssContainingText('span', 'I confirm my order'));
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmOrderBtn.click();
  }
}
