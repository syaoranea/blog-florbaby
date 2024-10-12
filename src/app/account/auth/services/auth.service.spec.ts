import { TestBed } from '@angular/core/testing';

import { AuthServiceCog } from './auth.service';

describe('AuthService', () => {
  let service: AuthServiceCog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServiceCog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
