import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePapersTwoComponent } from './generate-papers-two.component';

describe('GeneratePapersTwoComponent', () => {
  let component: GeneratePapersTwoComponent;
  let fixture: ComponentFixture<GeneratePapersTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratePapersTwoComponent]
    });
    fixture = TestBed.createComponent(GeneratePapersTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
