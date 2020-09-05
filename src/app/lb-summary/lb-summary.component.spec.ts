import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbSummaryComponent } from './lb-summary.component';

describe('LbSummaryComponent', () => {
  let component: LbSummaryComponent;
  let fixture: ComponentFixture<LbSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
