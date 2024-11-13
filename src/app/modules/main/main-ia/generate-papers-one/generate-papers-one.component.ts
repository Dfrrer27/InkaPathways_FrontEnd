import {Component, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-papers-one',
  templateUrl: './generate-papers-one.component.html',
  styleUrls: ['./generate-papers-one.component.scss']
})
export class GeneratePapersOneComponent {
  form: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.form = this.fb.group({
      region: ['', Validators.required]
    })
  }

  @Output() Current = new EventEmitter();

  Next(): void {
    this.Current.emit({
      data: 'datos form',
      next: 2
    });
  }

  Save() {
    if ( this.form.valid) {
      this.Current.emit({
        data: 'datos form',
        step: 2
      });
    }
  }
}
