import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BatchsPage } from './batchs.page';

describe('BatchsPage', () => {
  let component: BatchsPage;
  let fixture: ComponentFixture<BatchsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
