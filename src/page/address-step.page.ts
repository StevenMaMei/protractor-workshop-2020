import { $, ElementFinder } from 'protractor';

export class AddresStepPage {
  private proceedToCheckoutBtn: ElementFinder;

  constructor () {
    this.proceedToCheckoutBtn = $('#center_column > form > p > button > span');
  }

  public async completeAddresStepPage(): Promise<void> {
    await this.proceedToCheckoutBtn.click();
  }
}
