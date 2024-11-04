import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIaComponent } from './main-ia.component';

describe('MainIaComponent', () => {
  let component: MainIaComponent;
  let fixture: ComponentFixture<MainIaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainIaComponent]
    });
    fixture = TestBed.createComponent(MainIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
