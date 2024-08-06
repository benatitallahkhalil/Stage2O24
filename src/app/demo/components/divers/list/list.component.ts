import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
    divers: any[] = [];  // This should be fetched from a service
    selectedDivers: any = null;
    currentDialogType: 'add' | 'consult' | 'modify' | 'delete' = 'add';
    isDialogVisible: boolean = false;

    constructor() {
      // Sample data for testing purposes
      this.divers = [
        {
          numeroDivers: 'L001',
          fournisseur: 'Supplier1',
          dateDivers: '2022-01-01',
          montantDivers: 1000,
          numeroPiece: 12,
          etatDivers: "encoure"
        },
        {
          numeroDivers: 'L002',
          fournisseur: 'Supplier2',
          dateDivers: '2023-01-01',
          montantDivers: 1000,
          numeroPiece: 12,
          etatDivers: "encour"
        }
      ];
    }

    openDialog(type: 'add' | 'consult' | 'modify' | 'delete', divers?: any) {
      this.currentDialogType = type;
      this.selectedDivers = divers || {};
      this.isDialogVisible = true;
    }

    handleAdd(newDivers: any) {
      // Handle add operation
      this.divers.push(newDivers);
    }

    handleModify(modifiedDivers: any) {
      // Handle modify operation
      const index = this.divers.findIndex(l => l.numeroDivers === modifiedDivers.numeroDivers);
      if (index !== -1) {
        this.divers[index] = modifiedDivers;
      }
    }

    handleDelete(deletedDivers: any) {
      // Handle delete operation
      this.divers = this.divers.filter(l => l.numeroDivers !== deletedDivers.numeroDivers);
    }
  }
