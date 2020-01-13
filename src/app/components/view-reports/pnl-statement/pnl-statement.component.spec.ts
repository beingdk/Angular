import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnlStatementComponent } from './pnl-statement.component';

describe('PnlStatementComponent', () => {
  let component: PnlStatementComponent;
  let fixture: ComponentFixture<PnlStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnlStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnlStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
