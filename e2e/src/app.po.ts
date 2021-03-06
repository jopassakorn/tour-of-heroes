import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToDashboard(){
    return browser.get('/dashboard');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
