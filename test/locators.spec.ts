import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Test of filling the form. Entering to the website', () => {
  beforeAll(async () => {
    await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
  });
  describe('filling the form', async () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
      });
    });
    it('The submit button and the alert should have been pressed', async () => {
      await personalInformationPage.finishForm();
      await expect(personalInformationPage.getPageTitle()).toEqual('Selenium - Automation Practice Form');
    });
  });
});
