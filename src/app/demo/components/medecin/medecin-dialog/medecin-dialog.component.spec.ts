import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinDialogComponent } from './medecin-dialog.component';

describe('MedecinDialogComponent', () => {
  let component: MedecinDialogComponent;
  let fixture: ComponentFixture<MedecinDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedecinDialogComponent]
    });
    fixture = TestBed.createComponent(MedecinDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
