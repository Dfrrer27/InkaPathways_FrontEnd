import {Component, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-papers-two',
  templateUrl: './generate-papers-two.component.html',
  styleUrls: ['./generate-papers-two.component.scss']
})
export class GeneratePapersTwoComponent {
  form: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.form = this.fb.group({
      mes: ['', Validators.required]
    })
  }

  @Output() Current = new EventEmitter();

  Next(): void {
    this.Current.emit({
      data: 'datos 2 form',
      next: 3
    });
  }

  Save() {
    if ( this.form.valid) {
      this.Current.emit({
        data: 'datos 2 form',
        step: 3
      });
    }
  }

  Back() {
    this.Current.emit({
      step: 1
    });
  }
}