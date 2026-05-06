import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExamplesPage } from './examples.page';

describe('ExamplesPage', () => {
  let component: ExamplesPage;
  let fixture: ComponentFixture<ExamplesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ExamplesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ExamplesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
