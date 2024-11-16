import { Component } from '@angular/core';

@Component({
  selector: 'app-main-ia',
  templateUrl: './main-ia.component.html',
  styleUrls: ['./main-ia.component.scss']
})
export class MainIaComponent {

  Step: number = 1;
  dataFromStep3: any;

  onCurrentStep(event: { step: number, data?: any }) {
    this.Step = event.step;
    if (event.data) {
      this.dataFromStep3 = event.data;
    }
  }
}
