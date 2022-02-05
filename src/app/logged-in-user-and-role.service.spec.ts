import { TestBed } from '@angular/core/testing';

import { LoggedInUserAndRoleService } from './logged-in-user-and-role.service';

describe('LoggedInUserAndRoleService', () => {
  let service: LoggedInUserAndRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggedInUserAndRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
