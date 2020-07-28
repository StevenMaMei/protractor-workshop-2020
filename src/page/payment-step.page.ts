import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankBtn: ElementFinder;

  constructor () {
    // can be shortened. In this way it is clearer that we
    // are choosing the bankwire option, obviously it is
    // a class, but it is better than the original selector
    this.payByBankBtn = $('#HOOK_PAYMENT .bankwire');
  }

  public async goToPayByBank(): Promise<void> {
    await this.payByBankBtn.click();
  }
}
