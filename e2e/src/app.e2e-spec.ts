import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate to principal url', async () => {
    await page.navigateTo();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/');
  });
});
