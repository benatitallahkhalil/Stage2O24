import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinListComponent } from './medecin-list.component';

describe('MedecinListComponent', () => {
  let component: MedecinListComponent;
  let fixture: ComponentFixture<MedecinListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedecinListComponent]
    });
    fixture = TestBed.createComponent(MedecinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
