import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-main-ia',
  templateUrl: './main-ia.component.html',
  styleUrls: ['./main-ia.component.scss']
})
export class MainIaComponent {

  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}
  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
}
