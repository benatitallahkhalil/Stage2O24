import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyListComponent } from './family-list.component';

describe('FamilyListComponent', () => {
  let component: FamilyListComponent;
  let fixture: ComponentFixture<FamilyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilyListComponent]
    });
    fixture = TestBed.createComponent(FamilyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
