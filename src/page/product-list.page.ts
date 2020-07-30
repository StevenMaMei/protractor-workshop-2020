import { by, ElementFinder, browser, ExpectedConditions, element, ElementArrayFinder } from 'protractor';

export class ProductListPage {
  private products: ElementArrayFinder;
  private timeout: number = 5000;

  constructor () {
    this.products = element.all(by.css('.product-container'));
  }

  public async selectProduct(productName: string): Promise<void> {
    await browser.wait(
      ExpectedConditions.visibilityOf(this.findByProduct(productName)),
      this.timeout);
    await this.findByProduct(productName).$('a.ajax_add_to_cart_button').click();
  }

  private findByProduct(productName: string): ElementFinder {
    return this.products.filter((elem, index) => {
      index;
      return elem.$('a.product-name')
        .getAttribute('title').then((title: string) => {
          return title === productName;
        });
    }).first();
  }
}
