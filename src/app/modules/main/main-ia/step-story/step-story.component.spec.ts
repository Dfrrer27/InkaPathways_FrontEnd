import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepStoryComponent } from './step-story.component';

describe('StepStoryComponent', () => {
  let component: StepStoryComponent;
  let fixture: ComponentFixture<StepStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepStoryComponent]
    });
    fixture = TestBed.createComponent(StepStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
