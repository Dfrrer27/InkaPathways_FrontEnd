import {Component, EventEmitter, Output} from '@angular/core';
import {ModelAIService} from "../../../../services/modelAI.services";

@Component({
  selector: 'app-generate-papers-three',
  templateUrl: './generate-papers-three.component.html',
  styleUrls: ['./generate-papers-three.component.scss']
})
export class GeneratePapersThreeComponent {
  @Output() Current = new EventEmitter();
  Details: boolean = false;
  selectedFood: string | null = null

  constructor(private _modelAIService: ModelAIService) {}

  selectFood(dish: string): void {
    this.selectedFood = dish;
    this.Details = true;
  }

  Save() {
    if (this.selectedFood) {
      this._modelAIService.responsesTheUser(this.selectedFood).subscribe(response => {
        this.Current.emit({
          step: 4,
          data: response
        });
        console.log('Datos enviados desde el Paso 3: ', response);
      });
    }
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
