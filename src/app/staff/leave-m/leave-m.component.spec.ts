import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveMComponent } from './leave-m.component';

describe('LeaveMComponent', () => {
  let component: LeaveMComponent;
  let fixture: ComponentFixture<LeaveMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveMComponent]
    });
    fixture = TestBed.createComponent(LeaveMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
