import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePapersSixComponent } from './generate-papers-six.component';

describe('GeneratePapersSixComponent', () => {
  let component: GeneratePapersSixComponent;
  let fixture: ComponentFixture<GeneratePapersSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratePapersSixComponent]
    });
    fixture = TestBed.createComponent(GeneratePapersSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
