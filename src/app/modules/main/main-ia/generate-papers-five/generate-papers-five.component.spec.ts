import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePapersFiveComponent } from './generate-papers-five.component';

describe('GeneratePapersFiveComponent', () => {
  let component: GeneratePapersFiveComponent;
  let fixture: ComponentFixture<GeneratePapersFiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratePapersFiveComponent]
    });
    fixture = TestBed.createComponent(GeneratePapersFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
