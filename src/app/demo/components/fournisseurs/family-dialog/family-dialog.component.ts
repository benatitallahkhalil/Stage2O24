import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-family-dialog',
  templateUrl: './family-dialog.component.html',
  styleUrls: ['./family-dialog.component.scss']
})
export class FamilyDialogComponent implements OnInit {
  familyForm: FormGroup;
  family: any;
  data: any; 

  constructor(private fb: FormBuilder, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.data = this.config.data; 
    this.family = { ...this.data.family } || {};
  }

  ngOnInit(): void {
    this.familyForm = this.fb.group({
      code: [this.family.code, Validators.required],
      libelle: [this.family.libelle, Validators.required]
    });
  }

  onSubmit() {
    this.ref.close(this.familyForm.value);
  }
}