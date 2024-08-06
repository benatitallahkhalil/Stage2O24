import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-peniches-list',
  templateUrl: './peniches-list.component.html',
  styleUrls: ['./peniches-list.component.scss']
})
export class PenichesListComponent implements OnInit {
  peniches = [
    { etat: 'Peniche libre', codePeniche: '01018', numeroPeniche: '125', fiche: 'FM123/02648', client: 'BEN ATITALLAH KHALIL', numeroVisite: 1, typePeniche: 'Vente', dateVisite: '16/07/2024' },
    { etat: 'Peniche occupé', codePeniche: '01019', numeroPeniche: '126', fiche: 'FM123/02649', client: 'SALLAM OMAR', numeroVisite: 2, typePeniche: 'SAV', dateVisite: '17/07/2024' },
    { etat: 'Peniche libre', codePeniche: '01020', numeroPeniche: '127', fiche: 'FM123/02650', client: 'RAHMANI NADIA', numeroVisite: 3, typePeniche: 'Vente', dateVisite: '18/07/2024' },
    { etat: 'Peniche occupé', codePeniche: '01021', numeroPeniche: '128', fiche: 'FM123/02651', client: 'MTIBAA YOUSSEF', numeroVisite: 4, typePeniche: 'SAV', dateVisite: '19/07/2024' },
    { etat: 'Peniche libre', codePeniche: '01022', numeroPeniche: '129', fiche: 'FM123/02652', client: 'BEN ATITALLAH AICHA', numeroVisite: 5, typePeniche: 'Vente', dateVisite: '20/07/2024' },
    { etat: 'Peniche occupé', codePeniche: '01023', numeroPeniche: '130', fiche: 'FM123/02653', client: 'JMAL AMIR', numeroVisite: 6, typePeniche: 'SAV', dateVisite: '21/07/2024' }
  ];

  selectedPeniche: any = {};
  displayAddDialog: boolean = false;
  displayConsultDialog: boolean = false;
  displayModifyDialog: boolean = false;
  displayDeleteConfirmationDialog: boolean = false;
  confirmationVisible: boolean = false;

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit(): void { }

  showAddDialog() {
    this.displayAddDialog = true;
  }

  showConsultDialog() {
    if (this.selectedPeniche) {
      this.displayConsultDialog = true;
    }
  }

  showModifyDialog() {
    if (this.selectedPeniche) {
      this.displayModifyDialog = true;
    }
  }

  showDeleteConfirmationDialog() {
    if (this.selectedPeniche) {
      this.displayDeleteConfirmationDialog = true;
    }
  }

  addPeniche(newPeniche: any) {
    this.peniches.push(newPeniche);
    this.displayAddDialog = false;
  }

  saveModify(peniche: any) {
    // Update the peniche in the list
    const index = this.peniches.findIndex(p => p.codePeniche === peniche.codePeniche);
    if (index !== -1) {
      this.peniches[index] = peniche;
    }
    this.displayModifyDialog = false;
  }
  confirmDelete(peniche: any) {
    this.peniches = this.peniches.filter(p => p.codePeniche !== peniche.codePeniche);
    this.selectedPeniche = null;
    this.displayDeleteConfirmationDialog = false;
  }



  confirmVider() {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir vider cette Peniche ?',
      accept: () => {
        // Logic to empty the selected peniche
        this.emptyPeniche(this.selectedPeniche);
      }
    });
  }

  confirmRemplir() {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir remplir cette Peniche ?',
      accept: () => {
        // Logic to fill the selected peniche
        this.fillPeniche(this.selectedPeniche);
      }
    });
  }

  emptyPeniche(peniche: any) {
    // Change the state of the selected peniche to "Peniche libre"
    if (peniche.etat === 'Peniche occupé') {
      peniche.etat = 'Peniche libre';
    }
  }

  fillPeniche(peniche: any) {
    // Change the state of the selected peniche to "Peniche occupé"
    if (peniche.etat === 'Peniche libre') {
      peniche.etat = 'Peniche occupé';
    }
  }

  onConfirm() {
    this.confirmationVisible = false;
  }

  onReject() {
    this.confirmationVisible = false;
  }



  handleDialogClose(visible: boolean) {
    this.displayAddDialog = visible;
    this.displayConsultDialog = visible;
    this.displayModifyDialog = visible;
    this.displayDeleteConfirmationDialog= visible;
  }
  handleDelete(peniche: any) {
    console.log('Handling delete for:', peniche);
    // Logique pour supprimer le peniche
    this.peniches = this.peniches.filter(p => p.codePeniche !== peniche.codePeniche);
  }

}
