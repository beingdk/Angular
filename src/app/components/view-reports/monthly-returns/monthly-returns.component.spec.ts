import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyReturnsComponent } from './monthly-returns.component';

describe('MonthlyReturnsComponent', () => {
  let component: MonthlyReturnsComponent;
  let fixture: ComponentFixture<MonthlyReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
