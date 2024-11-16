import {Component, Input, EventEmitter, Output, SimpleChanges} from '@angular/core';
import {AllConst} from "../../../../../assets/data/allConst";
import {ModelAIService} from "../../../../services/modelAI.services";

@Component({
  selector: 'app-generate-papers-four',
  templateUrl: './generate-papers-four.component.html',
  styleUrls: ['./generate-papers-four.component.scss']
})
export class GeneratePapersFourComponent {

  @Output() Current = new EventEmitter();
  @Input() initialData: any;

  conversationData: any;
  nextEnabled = false;
  interactionCount = 0;

  constructor(private _modelAIService: ModelAIService) {}

  ngOnInit(): void {
    if (this.initialData) {
      this.conversationData = this.initialData;
      console.log('Datos recibidos:', this.conversationData);
    }
  }

  selectOption(option: string) {
    this._modelAIService.responsesTheUser(option).subscribe({
      next: (response) => {
        console.log('respuesta del paso 4: ', response)
        this.conversationData = response;
        this.interactionCount++;

        if (this.interactionCount >= 4) {
          this.nextEnabled = true;
        }
      },
      error: (err) => {
        console.error("Error en la solicitud: ", err);
      }
    });
  }

  Save() {
    if (this.nextEnabled) {
      this.Current.emit({
        data: 'datos 3 form',
        step: 5
      });
    }
  }

  Back() {
    this.Current.emit({
      step: 3
    });
  }
}
