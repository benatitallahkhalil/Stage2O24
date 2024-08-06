import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenichesListComponent } from './peniches-list.component';

describe('PenichesListComponent', () => {
  let component: PenichesListComponent;
  let fixture: ComponentFixture<PenichesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenichesListComponent]
    });
    fixture = TestBed.createComponent(PenichesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
