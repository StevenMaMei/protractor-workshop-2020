import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirmationText: ElementFinder;

  constructor () {
    this.confirmationText = $('.cheque-indent');
  }

  public async getConfirmationText(): Promise<string> {
    return this.confirmationText.getText();
  }
}
