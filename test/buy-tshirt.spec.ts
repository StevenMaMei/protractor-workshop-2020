import { browser } from 'protractor';
import { MenuContentPage, SignInPage, SummaryStepPage, AddresStepPage, ShippingStepPage,
  PaymentStepPage, BankPaymentPage, OrderSummaryPage, ProductAddedPage, ProductListPage } from '../src/page';

describe('Open the website', () => {

  it('then the website should be opened', async() => {
    await browser.get('http://automationpractice.com/');
  });

});

describe('Buy a T-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const productAddedPage: ProductAddedPage = new ProductAddedPage();
  const productListPage: ProductListPage = new ProductListPage();

  it('then it should select the t-shirt and buy it', async() => {
    await menuContentPage.goToTShirtMenu();

    await productListPage.addProduct();

    await productAddedPage.proceedToCheckOut();

    await summaryStepPage.completeSummaryStep();
  });

});

describe('Log-in', () => {
  const email: string = 'aperdomobo@gmail.com';
  const password: string = 'WorkshopProtractor';

  const signInPage: SignInPage = new SignInPage(email, password);

  it('then you should be logged', async () => {
    await signInPage.completeSignInStep();
  });
});

describe('Select the default address and accept the shipping', () => {
  const addresStepPage: AddresStepPage = new AddresStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();

  it('then you should select the defauld addres and accept the terms of shipping', async() => {
    await addresStepPage.completeAddresStepPage();

    await shippingStepPage.agreeTermsShippingStep();

    await shippingStepPage.completeShippingStep();
  });
});

describe('Proceed to pay', () => {
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();

  it('then you should have paid and the purchase must be succesful', async() => {
    await paymentStepPage.goToPayByBank();

    await bankPaymentPage.confirmOrder();

    await expect(orderSummaryPage.getConfirmationText())
      .toBe('Your order on My Store is complete.');
  });

});
