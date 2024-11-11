import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";
import {ErrorService} from "../../../services/error.service";
import {PasswordValidators} from "../../../utils/password-validators";
import {registerUser} from "../../../interfaces/User";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  form: FormGroup;
  loading: boolean = false;
  loaderDuration = 1000;

  constructor(private toastr: ToastrService,
              private fb: FormBuilder,
              private router: Router,
              private _authService: AuthService,
              private _errorService: ErrorService) {

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      gmail: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  sendMessage() {
    console.log('mensaje enviado')
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

      case 'gmail':
        errorMessage = control?.hasError('required') ? 'Ingresa tu gmail' : '';
        break;

      case 'message':
        errorMessage = control?.hasError('required') ? 'Ingresa un mensaje' : '';
        break;

      default:
        errorMessage = '';
        break;
    }
    return errorMessage;
  }

}
