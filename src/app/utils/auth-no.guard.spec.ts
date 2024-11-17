import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authNoGuard } from './auth-no.guard';

describe('authNoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authNoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
