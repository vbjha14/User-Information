import { TestBed } from '@angular/core/testing';

import { UserInfoClientService } from './user-info-client.service';

describe('UserInfoClientService', () => {
  let service: UserInfoClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInfoClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
