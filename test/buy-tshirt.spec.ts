import { browser } from 'protractor';
import { MenuContentPage, SignInPage, SummaryStepPage, AddresStepPage, ShippingStepPage,
  PaymentStepPage, BankPaymentPage, OrderSummaryPage, ProductAddedPage, ProductListPage } from '../src/page';
import { protractor } from 'protractor/built/ptor';

describe('Buy a t-shirt', () => {
  const email: string = 'aperdomobo@gmail.com';
  const password: string = 'WorkshopProtractor';

  const timeout: number = 5000;

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

    await browser.wait(
      protractor.ExpectedConditions.visibilityOf(productAddedPage.getAddToCartBtn()),
      timeout);
    await productAddedPage.addProduct();

    await browser.wait(
      protractor.ExpectedConditions.visibilityOf(productListPage.getProceedCheckoutBtn()),
      timeout);
    await productListPage.proceedToCheckOut();

    await summaryStepPage.completeSummaryStep();

    await signInPage.completeSignInStep();

    await addresStepPage.completeAddresStepPage();

    await shippingStepPage.agreeTermsShippingStep();

    await shippingStepPage.completeShippingStep();

    await paymentStepPage.goToPayByBank();

    await bankPaymentPage.confirmOrder();

    await expect(orderSummaryPage.getConfirmationText())
      .toBe('Your order on My Store is complete.');
  });
});
