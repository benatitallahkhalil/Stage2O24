import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LensListComponent } from './lens-list.component';

describe('LensListComponent', () => {
  let component: LensListComponent;
  let fixture: ComponentFixture<LensListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LensListComponent]
    });
    fixture = TestBed.createComponent(LensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
