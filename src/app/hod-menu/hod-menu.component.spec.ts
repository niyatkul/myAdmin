import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodMenuComponent } from './hod-menu.component';

describe('HodMenuComponent', () => {
  let component: HodMenuComponent;
  let fixture: ComponentFixture<HodMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HodMenuComponent]
    });
    fixture = TestBed.createComponent(HodMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
