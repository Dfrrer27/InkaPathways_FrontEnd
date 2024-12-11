import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ModelAIService} from "../../../../services/modelAI.services";

@Component({
  selector: 'app-generate-papers-three',
  templateUrl: './generate-papers-three.component.html',
  styleUrls: ['./generate-papers-three.component.scss']
})
export class GeneratePapersThreeComponent {
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
        console.log('respuesta del paso 3: ', response)
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
        step: 4
      });
    }
  }

  Back() {
    this.Current.emit({
      step: 2
    });
  }
}
