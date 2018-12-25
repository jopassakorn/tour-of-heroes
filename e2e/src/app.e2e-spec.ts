import { AppPage } from './app.po';
import { element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to tour-of-heroes!');
  });

  it('title should be tour-of-heroes', () => {
    page.navigateTo();
    var title = element(by.name);
    expect(title).toEqual('tour-of-heroes');
  });

  // it('should display Test Tour of Heroes message in title', () => {
  //   page.navigateToDashboard();
  //   expect(page.getParagraphText()).toEqual('Test Tour of Heroes');
  // });
});
