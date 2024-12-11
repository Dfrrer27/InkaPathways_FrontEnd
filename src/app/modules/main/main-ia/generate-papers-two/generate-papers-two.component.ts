import {Component, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ModelAIService} from "../../../../services/modelAI.services";

@Component({
  selector: 'app-generate-papers-two',
  templateUrl: './generate-papers-two.component.html',
  styleUrls: ['./generate-papers-two.component.scss']
})
export class GeneratePapersTwoComponent {
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
          step: 3,
          data: response
        });
        console.log('Datos enviados desde el Paso 3: ', response);
      });
    }
  }

  Back() {
    this.Current.emit({
      step: 1
    });
  }

  BackToPrevious() {
    this.Details = false;
  }
}
