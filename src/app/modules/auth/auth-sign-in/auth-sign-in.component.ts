import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {PasswordValidators} from "../../../utils/password-validators";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {ErrorService} from "../../../services/error.service";
import {loginUser} from "../../../interfaces/User";
import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './auth-sign-in.component.html',
  styleUrls: ['./auth-sign-in.component.scss']
})
export class AuthSignInComponent {
  hidePassword = true;
  hideRepassword = true;
  form: FormGroup;
  loading: boolean = false;
  loaderDuration = 1000;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private router: Router,
              private _authService: AuthService,
              private _errorService: ErrorService) {

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
      Validators.required,
      Validators.minLength(8),
      PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), {
        requiresDigit: true
      }),
      PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), {
        requiresUppercase: true
      }),
      PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), {
        requiresLowercase: true
      }),
      PasswordValidators.patternValidator(new RegExp("(?=.*[$@^!%*?&_-])"), {
        requiresSpecialChars: true
      })
    ]],
    })
  }

  loginUser() {
    if (this.form.invalid) {
      this.toastr.error('Por favor, completa todos los campos correctamente', 'Error de validación');
      return;
    }

    const loginuser: loginUser = {
      correo: this.form.value.email,
      contraseña_hash: this.form.value.password
    }

    this.loading = true;

    setTimeout(() => {
      console.log("Suscribiendose...")
      this._authService.signIn(loginuser).subscribe({
        next: (token) => {
          this.loading = false;
          localStorage.setItem('token', token);
          this.toastr.success(`Has iniciado sesión correctamente`, 'Inicio de sesión');
          this.router.navigate(['/main/home']);
          console.log(token);
        },
        error: (e: HttpErrorResponse) => {
          this._errorService.msgError(e);
          this.loading = false;
        }
      })
    }, this.loaderDuration);
  }

  getErrorMessage(controlName: string) {
    const control = this.form.get(controlName);
    let errorMessage: string;

    switch (controlName) {
      case 'email':
        errorMessage = control?.hasError('required') ? 'Ingresa tu email' : '';
        break;

      case 'password':
        errorMessage = control?.hasError('required') ? 'Ingresa una contraseña' : '';
        break;

      default:
        errorMessage = '';
        break;
    }
    return errorMessage;
  }
}
