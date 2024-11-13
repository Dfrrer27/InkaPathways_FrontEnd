import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-generate-papers-three',
  templateUrl: './generate-papers-three.component.html',
  styleUrls: ['./generate-papers-three.component.scss']
})
export class GeneratePapersThreeComponent {
  @Output() Current = new EventEmitter();
  Details: boolean = false;

  Next(): void {
    this.Current.emit({
      data: 'datos 4 form',
      next: 4
    });
  }

  Save() {
      this.Current.emit({
        data: 'datos 4 form',
        step: 4
      });
  }

  Back() {
    this.Current.emit({
      step: 2
    });
  }

  BackToPrevious() {
    this.Details = false;
  }
}
