import { TestBed } from '@angular/core/testing';

import { StaffMService } from './staff-m.service';

describe('StaffMService', () => {
  let service: StaffMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
