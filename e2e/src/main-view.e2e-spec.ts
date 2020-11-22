import { MainViewPage } from './main-view.po';
import { browser } from 'protractor';

describe(`<${MainViewPage.HtmlTagComponent}>`, () => {
  let page: MainViewPage;

  beforeEach(() => {
    page = new MainViewPage();
    page.navigateTo();
  });

  it('should display title app', () => {
    // page.navigateTo();
    expect(page.getTitleText()).toEqual('Kanban');
  });

  it(`should have as board name 'Tasks board'`, () => {
    // page.navigateTo();
    expect(page.getBoardName()).toEqual('Tasks board');
  });

  it(`should have tarea 'Some random idea' in column 'IDEAS'`, () => {
    // page.navigateTo();
    expect(page.isTaskColumn('IDEAS', 'Some random idea')).toBeTruthy();
  });

  it(`should move task of 'Some random idea' to 'Research'`, async () => {
    // page.navigateTo();
    expect(page.moveTask('Some random idea', 'RESEARCH'));
  });

  /* it(`should move a task of 'Ideas' to 'Research'`, () => {
    page.navigateTo();
    expect(page.getFirstColumn()).;
  }); */

  /* it(`should move a task of 'Ideas' to 'Research'`, async () => {
    page.navigateTo();
    let column = await page.getColumn(0);
    expect(await page.getTask(0)).toEqual('Some random idea');
    expect(column.nativeElement.querySelector('.column-title')).toEqual(
      'Ideas'
    );
  }); */
});
