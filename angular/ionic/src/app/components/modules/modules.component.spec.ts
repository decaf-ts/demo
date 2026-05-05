import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModulesComponent } from './modules.component';

describe('HeroComponent', () => {
  let component: ModulesComponent;
  let fixture: ComponentFixture<ModulesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ModulesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
