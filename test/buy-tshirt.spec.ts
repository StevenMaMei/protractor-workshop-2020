import { browser } from 'protractor';
import { MenuContentPage, SignInPage, SummaryStepPage, AddresStepPage, ShippingStepPage,
  PaymentStepPage, BankPaymentPage, OrderSummaryPage, ProductAddedPage, ProductListPage } from '../src/page';

describe('The user enters to the website', () => {

  beforeAll(async() => {
    await browser.get('http://automationpractice.com/');
  });
  describe('he goes to the t-shirt menu and adds one t-shirt to the cart', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();
      const productAddedPage: ProductAddedPage = new ProductAddedPage();
      const productListPage: ProductListPage = new ProductListPage();

      await menuContentPage.goToTShirtMenu();

      await productListPage.selectProduct('Faded Short Sleeve T-shirts');

      await productAddedPage.proceedToCheckOut();

      await summaryStepPage.completeSummaryStep();
    });
    describe('He logs into the system', () => {
      beforeAll(async () => {
        const email: string = 'aperdomobo@gmail.com';
        const password: string = 'WorkshopProtractor';
        const signInPage: SignInPage = new SignInPage(email, password);

        await signInPage.completeSignInStep();
      });
      describe('he selects the default address and accepts the shipping terms', () => {
        beforeAll(async () => {
          const addresStepPage: AddresStepPage = new AddresStepPage();
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();

          await addresStepPage.completeAddresStepPage();

          await shippingStepPage.agreeTermsShippingStep();

          await shippingStepPage.completeShippingStep();
        });
        describe('He proceeds to pay', () => {
          beforeAll(async () => {
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
            await paymentStepPage.goToPayByBank();
            await bankPaymentPage.confirmOrder();
          });

          it('the purchase has been completed', async() => {
            const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
            await expect(orderSummaryPage.getConfirmationText())
              .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
