import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LbSidebarComponent } from './lb-sidebar.component';

describe('LbSidebarComponent', () => {
  let component: LbSidebarComponent;
  let fixture: ComponentFixture<LbSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LbSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LbSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
