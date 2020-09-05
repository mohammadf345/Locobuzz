import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbTicketComponent } from './lb-ticket.component';

describe('LbTicketComponent', () => {
  let component: LbTicketComponent;
  let fixture: ComponentFixture<LbTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
