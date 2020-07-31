import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Entering to the website', () => {
  beforeAll(async () => {
    await browser.get('https://demoqa.com/frames');
  });
  describe('Changing the iframe1 heigh', async () => {
    const iframePage: IFramePage = new IFramePage();
    beforeAll(async () => {
      await iframePage.setFormFrameHeight(50);
    });
    it('the iframe1 height should has been modified', async () => {
      await expect((await iframePage.getIframeHeight()).toString())
        .toEqual('50');
    });
  });
});
