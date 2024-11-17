import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  const token = localStorage.getItem('token')
  if (!token){
    router.navigate(['/auth/sign-in'])
    return false;
  }
  return true;
};
