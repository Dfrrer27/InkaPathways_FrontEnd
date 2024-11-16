import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLeafletComponent } from './show-leaflet.component';

describe('ShowLeafletComponent', () => {
  let component: ShowLeafletComponent;
  let fixture: ComponentFixture<ShowLeafletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowLeafletComponent]
    });
    fixture = TestBed.createComponent(ShowLeafletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
