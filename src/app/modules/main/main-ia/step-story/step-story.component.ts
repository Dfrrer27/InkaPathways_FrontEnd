import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-step-story',
  templateUrl: './step-story.component.html',
  styleUrls: ['./step-story.component.scss']
})
export class StepStoryComponent {
  @Input() Story: number = 1;

  steps = [
    { icon: 'assets/icons/white/gesture_select.png', label: 'Escoger Región' },
    { icon: 'assets/icons/white/event_upcoming.png', label: 'Escoger Mes' },
    { icon: 'assets/icons/white/person_play.png', label: 'Escoger Evento' },
    { icon: 'assets/icons/white/psychology.png', label: 'Conversación' },
    { icon: 'assets/icons/white/document_scanner.png', label: 'Creación de Tríptico' }
  ];

  getStepStatus(index: number): string {
    if (index < this.Story - 1) {
      return 'Completado';
    } else if (index === this.Story - 1) {
      return 'En curso';
    } else {
      return 'Pendiente';
    }
  }
}
