import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LensDialogComponent } from './lens-dialog.component';

describe('LensDialogComponent', () => {
  let component: LensDialogComponent;
  let fixture: ComponentFixture<LensDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LensDialogComponent]
    });
    fixture = TestBed.createComponent(LensDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
