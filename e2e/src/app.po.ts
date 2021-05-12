import { browser, by, element, ExpectedConditions } from 'protractor';

const uniqueTitle = 'robert' + Date.now();

export class AppPage {
  async seekAndDestroy() {
    await element(by.id('search-by-title')).sendKeys(uniqueTitle);
    const row = await element(by.css('app-grid tbody tr'));
     await row.element(by.buttonText('remove')).click();
     return row.isPresent();
  }
  async fillAddItemForm() {
    await element(by.buttonText('add item')).click();
    const form = await element(by.id('add-item-form'));
    form.element(by.name('title')).sendKeys(uniqueTitle);
    form.element(by.name('price')).sendKeys(123);
    form.element(by.name('category')).sendKeys('food');
    await form.element(by.buttonText('send item')).click();
    return form;
  }
  async logIn() {
    const btnLogin = element(by.buttonText('log in'));
    btnLogin.click();
    const btnLogout = element(by.buttonText('log out'));
    return await browser.wait(ExpectedConditions.visibilityOf(btnLogout));
  }
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + 'items');
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }

  async pause(time: number = 5000) {
    return await browser.wait(new Promise((success) => {
      setTimeout(() => {
        success('ok')
      }, time);
    }), 30000);
  }

}
