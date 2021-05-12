import { browser, logging, ElementFinder } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage = new AppPage();

  beforeAll(async () => {
    await page.navigateTo();
    //await page.pause(2222);
    const btnLogout = await page.logIn();
    expect(btnLogout).toBeTrue;
  })

  xit('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('apka app is running!');
  });

  it('should add new item', async () => {
    await page.navigateTo();
    const modal = await page.fillAddItemForm();
    const row = page.seekAndDestroy();
    console.log('**', await row);
    expect(row).toBeFalse;
    await page.pause();
  })

});
