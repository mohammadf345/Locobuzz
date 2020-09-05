import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocobuzzHeaderComponent } from './locobuzz-header.component';

describe('LocobuzzHeaderComponent', () => {
  let component: LocobuzzHeaderComponent;
  let fixture: ComponentFixture<LocobuzzHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocobuzzHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocobuzzHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
