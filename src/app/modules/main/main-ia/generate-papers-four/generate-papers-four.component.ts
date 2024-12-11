import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {leafletPost} from "../../../../interfaces/leaflet";
import {HttpErrorResponse} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {ErrorService} from "../../../../services/error.service";
import {RootService} from "../../../../services/root.service";
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-generate-papers-four',
  templateUrl: './generate-papers-four.component.html',
  styleUrls: ['./generate-papers-four.component.scss']
})
export class GeneratePapersFourComponent {

  form: FormGroup;

  constructor( private toastr: ToastrService,
               private fb: FormBuilder,
               private _rootService: RootService,
               private _errorService: ErrorService ) {
    this.form = this.fb.group({
      fecha_salida: ['', [Validators.required]],
      fecha_retorno: ['', [Validators.required]],
      presupuesto: ['', [Validators.required, Validators.min(1)]],
      adultos: ['', [Validators.required, Validators.min(1)]],
      infantes: ['', [Validators.required, Validators.min(0)]],
      idioma: ['', [Validators.required]],
      transporte: ['', Validators.required],
      lugares_turisticos: ['', [Validators.required]],
      hotel: ['', [Validators.required]],
    });
  }

  @Output() Current = new EventEmitter();

  Save() {
    if ( this.form.valid) {

      const leaflet: leafletPost = {
        fecha_salida: formatDate(this.form.value.fecha_salida, 'yyyy-MM-dd', 'en-US'),
        fecha_retorno: formatDate(this.form.value.fecha_retorno, 'yyyy-MM-dd', 'en-US'),
        presupuesto: this.form.value.presupuesto,
        adultos: this.form.value.adultos,
        infantes: this.form.value.infantes,
        idioma: this.form.value.idioma,
        transporte: this.form.value.transporte,
        lugares_turisticos: this.form.value.lugares_turisticos,
        hotel: this.form.value.hotel
      }

      this._rootService.userLeafletPost(leaflet).subscribe({
        next: (response) => {
          console.log('response paso 4', response)
          localStorage.setItem('userLeafletId', response.id);
          this.toastr.success(`Formulario rellenado con exito`, 'Formulario guardado');
          this.Current.emit({
            data: 'datos 4 form',
            step: 5
          });
        },
        error: (e: HttpErrorResponse) => {
          this._errorService.msgError(e);
        }
      })
    }
  }

  Back() {
    this.Current.emit({
      step: 3
    });
  }
}
