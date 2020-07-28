import { $, ElementFinder } from 'protractor';

export class SignInPage {

  private emailBox: ElementFinder;
  private passwordBox: ElementFinder;
  private submitBtn: ElementFinder;
  private email: string;
  private password: string;

  constructor (email: string, password: string) {
    this.emailBox = $('#email');
    this.passwordBox = $('#passwd');
    // we can remove '> span'
    this.submitBtn = $('#SubmitLogin');
    this.email = email;
    this.password = password;
  }

  public async completeSignInStep(): Promise<void> {
    await this.emailBox.sendKeys(this.email);
    await this.passwordBox.sendKeys(this.password);
    await this.submitBtn.click();
  }
}
