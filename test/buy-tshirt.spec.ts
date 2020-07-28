import { browser } from 'protractor';
import { MenuContentPage, SignInPage, SummaryStepPage, AddresStepPage, ShippingStepPage,
  PaymentStepPage, BankPaymentPage, OrderSummaryPage, ProductAddedPage, ProductListPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const email: string = 'aperdomobo@gmail.com';
  const password: string = 'WorkshopProtractor';

  const menuContentPage: MenuContentPage = new MenuContentPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInPage: SignInPage = new SignInPage(email, password);
  const addresStepPage: AddresStepPage = new AddresStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const productAddedPage: ProductAddedPage = new ProductAddedPage();
  const productListPage: ProductListPage = new ProductListPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));

    await productAddedPage.addProduct();
    await(browser.sleep(3000));

    await productListPage.proceedToCheckOut();
    await(browser.sleep(3000));

    await summaryStepPage.completeSummaryStep();
    await(browser.sleep(3000));

    await signInPage.completeSignInStep();
    await(browser.sleep(3000));

    await addresStepPage.completeAddresStepPage();
    await(browser.sleep(3000));

    await shippingStepPage.agreeTermsShippingStep();
    await(browser.sleep(3000));

    await shippingStepPage.completeShippingStep();
    await(browser.sleep(3000));

    await paymentStepPage.goToPayByBank();
    await(browser.sleep(3000));

    await bankPaymentPage.confirmOrder();
    await(browser.sleep(3000));

    await expect(orderSummaryPage.getConfirmationText())
      .toBe('Your order on My Store is complete.');
  });
});
