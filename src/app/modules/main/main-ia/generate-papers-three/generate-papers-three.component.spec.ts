import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratePapersThreeComponent } from './generate-papers-three.component';

describe('GeneratePapersThreeComponent', () => {
  let component: GeneratePapersThreeComponent;
  let fixture: ComponentFixture<GeneratePapersThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratePapersThreeComponent]
    });
    fixture = TestBed.createComponent(GeneratePapersThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
