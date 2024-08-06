import { Component } from '@angular/core';

@Component({
  selector: 'app-lens-list',
  templateUrl: './lens-list.component.html',
  styleUrls: ['./lens-list.component.scss']
})
export class LensListComponent {
    lentilles: any[] = [];  // This should be fetched from a service
    selectedLentille: any = null;
    currentDialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
    isDialogVisible: boolean = false;

    constructor() {
      // Sample data for testing purposes
      this.lentilles = [
        {
            code: 'L001',
            fournisseur: 'Supplier1',
            marque: 'BrandA',
            prixVente: 100,
            rayon: 'Rayon1',
            stock: 20,
            sph: '1.0',
            designation: 'Designation1',
            couleurLentille: 'Blue'
          },
          {
            code: 'L002',
            fournisseur: 'Supplier2',
            marque: 'BrandB',
            prixVente: 120,
            rayon: 'Rayon2',
            stock: 15,
            sph: '1.5',
            designation: 'Designation2',
            couleurLentille: 'Green'
          }
      ];
    }

    openDialog(type: 'add' | 'consult' | 'modify' | 'delete', lentille?: any) {
      this.currentDialogType = type;
      this.selectedLentille = lentille || {};
      this.isDialogVisible = true;
    }

    enableButtons() {
      // This method can be used to enable or disable buttons based on the selected row
    }

    handleAdd(newLentille: any) {
      // Handle add operation
      this.lentilles.push(newLentille);
    }

    handleModify(modifiedLentille: any) {
      // Handle modify operation
      const index = this.lentilles.findIndex(l => l.codeLentille === modifiedLentille.codeLentille);
      if (index !== -1) {
        this.lentilles[index] = modifiedLentille;
      }
    }

    handleDelete(deletedLentille: any) {
      // Handle delete operation
      this.lentilles = this.lentilles.filter(l => l.codeLentille !== deletedLentille.codeLentille);
    }
  }
