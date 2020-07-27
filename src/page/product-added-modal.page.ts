import { $, ElementFinder } from 'protractor';

export class ProductAddedPage {
  private addToCartBtn: ElementFinder;

  constructor () {
    this.addToCartBtn = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addProduct(): Promise<void> {
    await this.addToCartBtn.click();
  }
}
