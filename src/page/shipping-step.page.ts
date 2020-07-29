import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private agreeTermsCheckBox: ElementFinder;
  private proceedCheckoutBtn: ElementFinder;

  constructor () {
    this.agreeTermsCheckBox = $('#cgv');
    // it could be clearer that we are searching the submit button
    this.proceedCheckoutBtn = $('[name="processCarrier"]');
  }

  public async agreeTermsShippingStep(): Promise<void> {
    await this.agreeTermsCheckBox.click();
  }

  public async completeShippingStep(): Promise<void> {
    await this.proceedCheckoutBtn.click();
  }
}
