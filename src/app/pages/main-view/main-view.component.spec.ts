import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainViewComponent } from './main-view.component';

describe('MainViewComponent', () => {
  let component: MainViewComponent;
  let fixture: ComponentFixture<MainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'kanban'`, () => {
    expect(component.title).toEqual('Kanban');
  });

  it(`should have as board name 'Tasks board'`, () => {
    expect(component.boardName).toEqual('Tasks board');
  });

  it(`should have four columns`, () => {
    expect(component.board.columns.length).toEqual(4);
  });

  it(`should have first column with names is 'IDEAS'`, () => {
    expect(component.board.columns[0]).toEqual(
      jasmine.objectContaining({ name: 'Ideas' })
    );
  });

  it(`should have four columns with names are [IDEAS, RESEARCH, TODO, DONE]`, () => {
    expect(component.board.columns.map((column) => column.name)).toEqual([
      'Ideas',
      'Research',
      'Todo',
      'Done',
    ]);
  });

  it(`should have three tasks in column 'IDEAS'`, () => {
    expect(
      component.board.columns.map((column) =>
        column.name === 'Ideas' ? column.tasks : ''
      )
    ).toContain([
      'Some random idea',
      'This is another random idea',
      'build an awesome application',
    ]);
  });
});
