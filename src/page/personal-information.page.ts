import { $, by, ElementFinder, ExpectedConditions, browser } from 'protractor';
import { PersonalInfo } from '../personalInfo';

export class PersonalInformationPage {
  private firstNameBox: ElementFinder;
  private lastNameBox: ElementFinder;
  private sexCheckBox: ElementFinder;
  private yearsOfExperienceCheckBox: ElementFinder;
  private professionCheckBox: ElementFinder;
  private toolSeleniumCheckBox: ElementFinder;
  private continentSelect: ElementFinder;
  private commandsSelect: ElementFinder;
  private submitBtn: ElementFinder;
  private timeout: number = 8000;
  private pageTitle: ElementFinder;

  constructor () {
    this.firstNameBox = $('input[name="firstname"]');
    this.lastNameBox = $('input[name="lastname"]');
    this.submitBtn = $('button[name="submit"]');
    this.pageTitle = $('div.mui-container-fluid.content > div > div.mui-col-md-6.tutorial-content > h1:nth-child(1)');
  }

  public async finishForm() {
    await this.submitBtn.click();
    browser.wait(ExpectedConditions.alertIsPresent(), this.timeout);
    await browser.switchTo().alert().accept();
  }

  public async getPageTitle(): Promise<string> {
    await browser.wait(
      ExpectedConditions.visibilityOf(this.pageTitle),
      this.timeout);
    return this.pageTitle.getText();
  }

  public async fillForm(info: PersonalInfo): Promise<void> {
    await browser.wait(
      ExpectedConditions.visibilityOf(this.firstNameBox),
      this.timeout);

    await this.firstNameBox.sendKeys(info.firstName);

    await this.lastNameBox.sendKeys(info.lastName);

    this.sexCheckBox = $(`input[name="sex"][value=${info.sex}]`);
    await this.sexCheckBox.click();

    this.yearsOfExperienceCheckBox = $(`input[name="exp"][type="radio"][value="${info
                                                                                  .experience}"]`);
    await this.yearsOfExperienceCheckBox.click();

    info['profession'].forEach(async (element) => {
      this.professionCheckBox = $(`input[name="profession"][value="${element}"]`);
      await this.professionCheckBox.click();
    });

    info['commands'].forEach(async (element) => {
      this.commandsSelect = $('select[name="selenium_commands"]')
      .element(by.cssContainingText('option', element));
      await this.commandsSelect.click();
    });

    info['tools'].forEach(async (element) => {
      this.toolSeleniumCheckBox = $(`input[name="tool"][value="${element}"]`);
      await this.toolSeleniumCheckBox.click();
    });

    this.continentSelect = $('select[name="continents"]')
      .element(by.cssContainingText('option', info.continent));
    await this.continentSelect.click();
  }
}
