import { $, ElementFinder } from 'protractor';

export class AddresStepPage {
  private proceedToCheckoutBtn: ElementFinder;

  constructor () {
    // it could be clearer that we are searching the submit button
    this.proceedToCheckoutBtn = $('[name="processAddress"]');
  }

  public async completeAddresStepPage(): Promise<void> {
    await this.proceedToCheckoutBtn.click();
  }
}
