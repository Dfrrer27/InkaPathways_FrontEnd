import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordValidators {
  constructor() {}

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [p: string]: any } | null => {
      if (!control.value) {
        // Si el valor del control está vacío, no retorna ningún error.
        return null;
      }

      // Testea el valor del control contra la expresión regular suministrada.
      const valid = regex.test(control.value);

      // Si es válido, no retorna ningún error, de lo contrario, retorna el objeto de error pasado como segundo parámetro.
      return valid ? null : error;
    };
  }

}
