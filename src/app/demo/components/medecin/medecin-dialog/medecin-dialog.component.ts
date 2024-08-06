import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-medecin-dialog',
  templateUrl: './medecin-dialog.component.html',
  styleUrls: ['./medecin-dialog.component.scss']
})
export class MedecinDialogComponent implements OnInit {
  medecinForm: FormGroup;
  medecin: any;
  data: any;
  paysList: string[] = ['France', 'Belgique', 'Suisse', 'Canada'];
  villeList: string[] = ['Paris', 'Bruxelles', 'Genève', 'Montréal'];

  constructor(private fb: FormBuilder, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
    this.data = this.config.data;
    this.medecin = { ...this.data.medecin } || {};
  }

  ngOnInit(): void {
    this.medecinForm = this.fb.group({
      codeMedecin: [this.medecin.codeMedecin, Validators.required],
      nom: [this.medecin.nom, Validators.required],
      prenom: [this.medecin.prenom, Validators.required],
      adresse: [this.medecin.adresse],
      pays: [this.medecin.pays],
      ville: [this.medecin.ville],
      email: [this.medecin.email],
      siteWeb: [this.medecin.siteWeb],
      telCabinet: [this.medecin.telCabinet],
      telDomicile: [this.medecin.telDomicile],
      telPortable1: [this.medecin.telPortable1],
      telPortable2: [this.medecin.telPortable2],
      fax: [this.medecin.fax],
      gender: [this.medecin.gender],
      typeCabinet: [this.medecin.typeCabinet]
    });
  }

  onSubmit() {
    this.ref.close(this.medecinForm.value);
  }

  onCancel() {
    this.ref.close();
  }
}
