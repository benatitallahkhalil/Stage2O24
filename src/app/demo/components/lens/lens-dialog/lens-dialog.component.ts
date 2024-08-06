import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lens-dialog',
  templateUrl: './lens-dialog.component.html',
  styleUrls: ['./lens-dialog.component.scss']
})
export class LensDialogComponent {
 @Input() dialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
@Input() selectedLentille: any = {};
@Input() visible: boolean = false;
@Output() visibleChange = new EventEmitter<boolean>();
@Output() onAdd = new EventEmitter<any>();
@Output() onModify = new EventEmitter<any>();
@Output() onDelete = new EventEmitter<any>();
lentilles = [
    { code: 'L001', fournisseur: 'Fournisseur A', marque: 'Marque X', prixVente: 100, rayon: 'Rayon A', stock: 50, sph: '-1.00', designation: 'Designation A', couleurLentille: 'Bleu' },
    // Add more lentilles objects as needed
  ];
newLentille: any = {};

fournisseurOptions = [
    { label: 'Fournisseur 1', value: 1 },
    { label: 'Fournisseur 2', value: 2 },
    // Add more options as needed
  ];

  familleOptions = [
    { label: 'Famille 1', value: 1 },
    { label: 'Famille 2', value: 2 },
    // Add more options as needed
  ];

  nomCouleurOptions = [
    { label: 'Couleur 1', value: 1 },
    { label: 'Couleur 2', value: 2 },
    // Add more options as needed
  ];

  marqueOptions = [
    { label: 'Marque 1', value: 1 },
    { label: 'Marque 2', value: 2 },
    // Add more options as needed
  ];

  couleurOptions = [
    { label: 'Couleur 1', value: 1 },
    { label: 'Couleur 2', value: 2 },
    // Add more options as needed
  ];

  surfaceOptions = [
    { label: 'Surface 1', value: 1 },
    { label: 'Surface 2', value: 2 },
    // Add more options as needed
  ];

  matiereOptions = [
    { label: 'Matière 1', value: 1 },
    { label: 'Matière 2', value: 2 },
    // Add more options as needed
  ];

  typeOptions = [
    { label: 'Type 1', value: 1 },
    { label: 'Type 2', value: 2 },
    // Add more options as needed
  ];

  materiauxOptions = [
    { label: 'Matériau 1', value: 1 },
    { label: 'Matériau 2', value: 2 },
    // Add more options as needed
  ];

  packagingOptions = [
    { label: 'Packaging 1', value: 1 },
    { label: 'Packaging 2', value: 2 },
    // Add more options as needed
  ];

get isAddDialog() {
  return this.dialogType === 'add';
}

get isConsultDialog() {
  return this.dialogType === 'consult';
}

get isModifyDialog() {
  return this.dialogType === 'modify';
}

get isDeleteDialog() {
  return this.dialogType === 'delete';
}

get header() {
  if (this.isAddDialog) return 'Ajouter Lentille';
  if (this.isConsultDialog) return 'Détails Lentille';
  if (this.isModifyDialog) return 'Modifier Lentille';
  return 'Confirmation de Suppression';
}

get currentLentille() {
  return this.isAddDialog ? this.newLentille : this.selectedLentille;
}

save() {
  if (this.isAddDialog) {
    this.onAdd.emit(this.newLentille);
    this.newLentille = {};
  } else if (this.isModifyDialog) {
    this.onModify.emit(this.selectedLentille);
  }
  this.closeDialog();
}

cancel() {
  this.closeDialog();
}

confirmDelete() {
  this.onDelete.emit(this.selectedLentille);
  this.closeDialog();
}

private closeDialog() {
  this.visible = false;
  this.visibleChange.emit(this.visible);
}

}
