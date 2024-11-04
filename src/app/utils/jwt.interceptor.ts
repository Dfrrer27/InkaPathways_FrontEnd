import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import {ErrorService} from "../services/error.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private router: Router, private _errorService: ErrorService, private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    if(token) {
      request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401){
          this._errorService.msgError(error)
          this.router.navigate(['/auth/sign-in'])
        }
        return throwError(() => error)
      })
    );

  }

}