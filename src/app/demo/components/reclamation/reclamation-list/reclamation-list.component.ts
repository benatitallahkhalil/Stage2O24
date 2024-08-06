import { Component } from '@angular/core';

@Component({
  selector: 'app-reclamation-list',
  templateUrl: './reclamation-list.component.html',
  styleUrls: ['./reclamation-list.component.scss']
})
export class ReclamationListComponent {
   reclamation: any[] = [];  // This should be fetched from a service
    selectedReclamation: any = null;
    currentDialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
    isDialogVisible: boolean = false;

    constructor() {
      // Sample data for testing purposes
      this.reclamation = [
        {
            codeReclamation: 'L001',
            libelle: 'Supplier1',

          },
          {
            codeReclamation: 'L002',
            libelle: 'Supplier2',

          }
      ];
    }

    openDialog(type: 'add' | 'consult' | 'modify' | 'delete', reclamation?: any) {
      this.currentDialogType = type;
      this.selectedReclamation = this.reclamation || {};
      this.isDialogVisible = true;
    }

    enableButtons() {
      // This method can be used to enable or disable buttons based on the selected row
    }

    handleAdd(newReclamation: any) {
      // Handle add operation
      this.reclamation.push(newReclamation);
    }

    handleModify(modifiedReclamation: any) {
      // Handle modify operation
      const index = this.reclamation.findIndex(l => l.codeReclamation === modifiedReclamation.codeReclamation);
      if (index !== -1) {
        this.reclamation[index] = modifiedReclamation;
      }
    }

    handleDelete(deletedReclamation: any) {
      // Handle delete operation
      this.reclamation = this.reclamation.filter(l => l.codeReclamation !== deletedReclamation.codeReclamation);
    }
  }
