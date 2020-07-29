import { by, element, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private confirmationText: ElementFinder;

  constructor () {
    this.confirmationText = element(by.cssContainingText('strong', 'Your order on My Store is complete.'));
  }

  public async getConfirmationText(): Promise<string> {
    return this.confirmationText.getText();
  }
}
