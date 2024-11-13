import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-step-story',
  templateUrl: './step-story.component.html',
  styleUrls: ['./step-story.component.scss']
})
export class StepStoryComponent {
  @Input() Story: number = 1;
}
