import { Column } from 'src/app/models/column.model';
import { browser, by, element, WebElementPromise, promise } from 'protractor';

export class MainViewPage {
  static HtmlTagComponent = 'app-main-view';

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-main-view .app-name')).getText() as Promise<
      string
    >;
  }

  getBoardName() {
    return element(by.css('.root .board-name')).getText();
  }

  async isTaskColumn(col: string, task: string) {
    return (
      await element
        .all(by.css('.board-columns .board-column'))
        .filter(
          async (colum) =>
            (await colum.element(by.css('.column-title')).getText()) === col
        )
        .all(by.css('.task-container .task'))
        .getText()
    ).includes(task);
  }

  async getTask(num: number) {
    return await element(by.binding('board.columns')).map(
      async (column: any[]) =>
        await column[num].map(async (task: any[]) => await task[num])
    );
  }

  async moveTask(task: string, column: string) {
    return (
      await element
        .all(by.css('.board-columns .board-column'))
        .map(async (el, index) =>
          (await el.element(by.css('.column-title')).getText()) === column
            ? index
            : ''
        )
    )
      .filter(String)
      .join();
  }
}
