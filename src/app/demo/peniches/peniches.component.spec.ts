import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenichesComponent } from './peniches.component';

describe('PenichesComponent', () => {
  let component: PenichesComponent;
  let fixture: ComponentFixture<PenichesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenichesComponent]
    });
    fixture = TestBed.createComponent(PenichesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
