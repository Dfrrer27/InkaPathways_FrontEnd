import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor( private toastr: ToastrService ) { }

  msgError(e: HttpErrorResponse){
    if (e.error.msg){
      this.toastr.error(e.error.msg, 'Error');
    } else {
      this.toastr.error('Ups ocurrio un error, comuniquese con el administrador', 'Error');
      console.log(e)
    }
    // console.log();
  }
}
