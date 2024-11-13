import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePapersFourComponent } from './generate-papers-four.component';

describe('GeneratePapersFourComponent', () => {
  let component: GeneratePapersFourComponent;
  let fixture: ComponentFixture<GeneratePapersFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratePapersFourComponent]
    });
    fixture = TestBed.createComponent(GeneratePapersFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
