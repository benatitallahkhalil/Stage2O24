import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPenicheComponent } from './dialog-peniche.component';

describe('DialogPenicheComponent', () => {
  let component: DialogPenicheComponent;
  let fixture: ComponentFixture<DialogPenicheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogPenicheComponent]
    });
    fixture = TestBed.createComponent(DialogPenicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
