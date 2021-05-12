import { browser, by, element, ExpectedConditions } from 'protractor';

export class AppPage {
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
