import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirmationText: ElementFinder;

  constructor () {
    this.confirmationText = $('#center_column > div > p > strong');
  }

  public async getConfirmationText(): Promise<string> {
    return this.confirmationText.getText();
  }
}
