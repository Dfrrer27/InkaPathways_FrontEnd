import {Component, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
  selector: 'app-generate-papers-one',
  templateUrl: './generate-papers-one.component.html',
  styleUrls: ['./generate-papers-one.component.scss']
})
export class GeneratePapersOneComponent {
  form: FormGroup;

  constructor( private fb: FormBuilder, private router: Router ) {
    this.form = this.fb.group({
      region: ['', Validators.required]
    })
  }

  @Output() Current = new EventEmitter();

  Save() {
    if ( this.form.valid) {
      this.Current.emit({
        data: 'datos 2 form',
        step: 2
      });
    }
  }

  Back() {
    this.router.navigate(['/']);
  }
}
