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

  Step: number = 1;
  PapersSave: any = {
    stepOne: {}
  };

  Save($event: any) {

  }
}
