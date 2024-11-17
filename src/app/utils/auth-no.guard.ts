import { CanActivateFn, Router } from '@angular/router';
import {inject, Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authNoGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const _authService: AuthService = inject(AuthService)

  const isAuthenticated = _authService.getToken();

  if (isAuthenticated) {
    router.navigate(['/main/home']);
    return false;
  }
  return true;
};
