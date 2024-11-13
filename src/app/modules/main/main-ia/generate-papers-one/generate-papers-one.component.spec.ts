import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePapersOneComponent } from './generate-papers-one.component';

describe('GeneratePapersOneComponent', () => {
  let component: GeneratePapersOneComponent;
  let fixture: ComponentFixture<GeneratePapersOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratePapersOneComponent]
    });
    fixture = TestBed.createComponent(GeneratePapersOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
