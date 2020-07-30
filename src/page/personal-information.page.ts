import { $, by, ElementFinder, ExpectedConditions, browser } from 'protractor';

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
  private timeout: number = 5000;

  constructor () {
    this.firstNameBox = $('input[name="firstname"]');
    this.lastNameBox = $('input[name="lastname"]');
    this.submitBtn = $('button[name="submit"]');
  }

  public async finishForm() {
    await this.submitBtn.click();
  }

  public async fillForm(info: Object): Promise<void> {
    await browser.wait(
      ExpectedConditions.visibilityOf(this.firstNameBox),
      this.timeout);

    await this.firstNameBox.sendKeys(info['firstName']);

    await this.lastNameBox.sendKeys(info['lastName']);

    this.sexCheckBox = $(`input[name="sex"][value=${info['sex']}]`);
    await this.sexCheckBox.click();

    this.yearsOfExperienceCheckBox = $(`input[name="exp"][type="radio"][value="${info['experience']}"]`);
    await this.yearsOfExperienceCheckBox.click();

    info['profession'].forEach(async (element) => {
      this.professionCheckBox = $(`input[name="profession"][value="${element}"]`);
      await this.professionCheckBox.click();
    });

    info['tools'].forEach(async (element) => {
      this.toolSeleniumCheckBox = $(`input[name="tool"][value="${element}"]`);
      await this.toolSeleniumCheckBox.click();
    });

    this.continentSelect = $('select[name="continents"]')
      .element(by.cssContainingText('option', info['continent']));
    await this.continentSelect.click();

    info['commands'].forEach(async (element) => {
      this.commandsSelect = $('select[name="selenium_commands"]')
      .element(by.cssContainingText('option', element));
      await this.commandsSelect.click();
    });
  }
}
