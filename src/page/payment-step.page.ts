import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankBtn: ElementFinder;

  constructor () {
    this.payByBankBtn = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToPayByBank(): Promise<void> {
    await this.payByBankBtn.click();
  }
}
