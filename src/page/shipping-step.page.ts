import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private agreeTermsCheckBox: ElementFinder;
  private proceedCheckoutBtn: ElementFinder;

  constructor () {
    this.agreeTermsCheckBox = $('#cgv');
    this.proceedCheckoutBtn = $('#form > p > button > span');
  }

  public async agreeTermsShippingStep(): Promise<void> {
    await this.agreeTermsCheckBox.click();
  }

  public async completeShippingStep(): Promise<void> {
    await this.proceedCheckoutBtn.click();
  }
}
