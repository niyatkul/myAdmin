import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveManagmentComponent } from './leave-managment.component';

describe('LeaveManagmentComponent', () => {
  let component: LeaveManagmentComponent;
  let fixture: ComponentFixture<LeaveManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveManagmentComponent]
    });
    fixture = TestBed.createComponent(LeaveManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
