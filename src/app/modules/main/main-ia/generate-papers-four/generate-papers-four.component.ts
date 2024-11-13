import {Component, EventEmitter, Output} from '@angular/core';
import {AllConst} from "../../../../../assets/data/allConst";

@Component({
  selector: 'app-generate-papers-four',
  templateUrl: './generate-papers-four.component.html',
  styleUrls: ['./generate-papers-four.component.scss']
})
export class GeneratePapersFourComponent {

  @Output() Current = new EventEmitter();
  Details: boolean = false;
  Data = AllConst.ConversationAI;

  Next(): void {
    this.Current.emit({
      data: 'datos 3 form',
      next: 5
    });
  }

  Save() {
      this.Current.emit({
        data: 'datos 4 form',
        step: 5
      });
  }

  Back() {
    this.Current.emit({
      step: 3
    });
  }

  BackToPrevious() {
    this.Details = false;
  }
}
