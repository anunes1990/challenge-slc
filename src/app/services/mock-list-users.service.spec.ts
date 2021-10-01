import { TestBed } from '@angular/core/testing';

import { MockListUsersService } from './mock-list-users.service';

describe('MockListUsersService', () => {
  let service: MockListUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockListUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
