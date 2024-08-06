import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FamilyDialogComponent } from '../family-dialog/family-dialog.component';

@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.scss']
})
export class FamilyListComponent implements OnInit {
  families = [
    { code: 1, libelle: 'GLOBAL' },
    { code: 10, libelle: 'Montre bigotti' },
    { code: 11, libelle: 'monture' },
    { code: 12, libelle: 'produit lentille' },
    { code: 13, libelle: 'coffret lunette' },
    { code: 14, libelle: 'MOUNA CHAINE COLLIER' },
    { code: 15, libelle: 'sodure' },
    { code: 16, libelle: 'mahmoud sodure' },
    { code: 17, libelle: 'ACCESSOIRES' },
    { code: 18, libelle: 'FOURNITURES' },
    { code: 19, libelle: 'MARKETING' },
    { code: 2, libelle: 'Verre' },
    { code: 20, libelle: 'FOURNITURE' },
    { code: 21, libelle: 'PRODUIT NETTOYANT' },
    { code: 3, libelle: 'prothese oculaire' },
    { code: 4, libelle: 'FORMATION' },
    { code: 5, libelle: 'CHARGE' },
    { code: 6, libelle: 'INFORMATIQUE' },
    { code: 7, libelle: 'SERVICE TECHNIQUE' },
  ];
  selectedFamily: any;
  ref: DynamicDialogRef;

  constructor(public dialogService: DialogService) {}

  ngOnInit(): void {}

  showDialog(action: string) {
    this.ref = this.dialogService.open(FamilyDialogComponent, {
      data: { action, family: this.selectedFamily },
      header: action === 'add' ? 'Ajouter Famille' : action === 'modify' ? 'Modifier Famille' : 'Consulter Famille',
      width: '50%',
    });

    this.ref.onClose.subscribe((result) => {
      if (result) {
        if (action === 'add') {
          this.families.push(result);
        } else if (action === 'modify') {
          const index = this.families.findIndex(f => f.code === result.code);
          if (index !== -1) {
            this.families[index] = result;
          }
        }
      }
    });
  }

  deleteFamily() {
    if (this.selectedFamily) {
      this.families = this.families.filter(f => f !== this.selectedFamily);
      this.selectedFamily = null;
    }
  }
}
