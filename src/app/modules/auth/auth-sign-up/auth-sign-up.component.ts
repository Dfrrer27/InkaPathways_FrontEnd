import { Component } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PasswordValidators} from "../../../utils/password-validators";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {registerUser} from "../../../interfaces/User";
import {AuthService} from "../../../services/auth.service";
import {ErrorService} from "../../../services/error.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-auth-sign-up',
  templateUrl: './auth-sign-up.component.html',
  styleUrls: ['./auth-sign-up.component.scss']
})
export class AuthSignUpComponent {
  hidePassword = true;
  hideRepassword = true;
  form: FormGroup;
  loading: boolean = false;
  loaderDuration = 1000;

  regiones: string[] = [
    'Amazonas', 'Áncash', 'Apurímac', 'Arequipa', 'Ayacucho',
    'Cajamarca', 'Callao', 'Cusco', 'Huancavelica', 'Huánuco',
    'Ica', 'Junín', 'La Libertad', 'Lambayeque', 'Lima',
    'Loreto', 'Madre de Dios', 'Moquegua', 'Pasco', 'Piura',
    'Puno', 'San Martín', 'Tacna', 'Tumbes', 'Ucayali'
  ];

  constructor(private toastr: ToastrService,
              private fb: FormBuilder,
              private router: Router,
              private _authService: AuthService,
              private _errorService: ErrorService) {

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      lugar_procedencia: ['', Validators.required],
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
      repassword: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  addUser() {
    // Validamos que las password sean iguales
    if (this.form.value.password != this.form.value.repassword) {
      this.toastr.error('Las contraseñas ingresadas son distintas', 'Error');
      return;
    }

    const user: registerUser = {
      correo: this.form.value.email,
      nombre: this.form.value.name,
      apellido: this.form.value.last_name,
      lugar_procedencia: this.form.value.lugar_procedencia,
      contraseña_hash: this.form.value.password
    }

    this.loading = true;

    setTimeout( () => {
      this._authService.signUp(user).subscribe({
        next: () => {
          this.loading = false
          this.toastr.success(`El usuario ${this.form.value.name} registrado con exito`, 'Usuario registrado');
          this.router.navigate(['/auth/sign-in']);
        },
        error: (e: HttpErrorResponse) => {
          this._errorService.msgError(e);
          this.loading = false;
        }
      })
    }, this.loaderDuration)
  }

  getErrorMessage(controlName: string) {
    const control = this.form.get(controlName);
    let errorMessage: string;

    switch (controlName) {
      case 'name':
        errorMessage = control?.hasError('required') ? 'Ingresa tu nombre' : '';
        break;

      case 'last_name':
        errorMessage = control?.hasError('required') ? 'Ingresa tu apellido' : '';
        break;

      case 'email':
        errorMessage = control?.hasError('required') ? 'Ingresa tu email' : '';
        break;

      case 'lugar_procedencia':
        errorMessage = control?.hasError('required') ? 'Escoge tu región' : '';
        break;

      case 'password':
        errorMessage = control?.hasError('required') ? 'Ingresa una contraseña' : '';
        break;

      case 'repassword':
        errorMessage = control?.hasError('required') ? 'repite la contraseña' : '';
        break;

      default:
        errorMessage = '';
        break;
    }
    return errorMessage;
  }

}
