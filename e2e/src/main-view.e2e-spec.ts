import { MainViewPage } from './main-view.po';
import { browser } from 'protractor';

describe(`<${MainViewPage.HtmlTagComponent}>`, () => {
  let page: MainViewPage;

  beforeEach(() => {
    page = new MainViewPage();
    page.navigateTo();
  });

  it('should display title app', () => {
    expect(page.getTitleText()).toEqual('Kanban');
  });

  it(`should have as board name 'Tasks board'`, () => {
    expect(page.getBoardName()).toEqual('Tasks board');
  });

  it(`should have tarea 'Some random idea' in column 'IDEAS'`, () => {
    expect(page.isTaskColumn('IDEAS', 'Some random idea')).toBeTruthy();
  });

  it(`should move task of 'Some random idea' to 'Research'`, async () => {
    expect(page.moveTask('Some random idea', 'RESEARCH'));
  });
});
