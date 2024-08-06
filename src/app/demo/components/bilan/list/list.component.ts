import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';

import { Bilan } from 'src/app/models/bilan.model';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { BilanService } from '../bilan.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  bilans: Bilan[] = [];

  constructor(
    private router: Router,
    private dialogService: DialogService,
    private bilanService: BilanService
  ) { }

  ngOnInit(): void {
    this.loadBilans();
  }

  loadBilans(): void {
    this.bilanService.getAllBilans().subscribe(
      (data: Bilan[]) => this.bilans = data,
      error => console.error('Erreur lors du chargement des bilans', error)
    );
  }

  navigateToAdd(): void {
    this.router.navigate(['/bilan/add']);
  }

  navigateToEdit(id: number): void {
    this.router.navigate(['/bilan/edit', id]);
  }

  confirmDelete(bilan: Bilan): void {
    const ref = this.dialogService.open(DeleteDialogComponent, {
      header: 'Confirmation de suppression',
      width: '350px',
      baseZIndex: 10000,
      data: {
        bilan: bilan
      },
      styleClass: 'delete-dialog'
    });

    ref.onClose.subscribe((result: boolean) => {
      if (result === true) {
        this.deleteBilan(bilan.idBilan);
      } else {
        console.log('Suppression annulée');
      }
    });
  }

  deleteBilan(id: number): void {
    this.bilanService.deleteBilan(id).subscribe(
      () => this.bilans = this.bilans.filter(b => b.idBilan !== id),
      error => console.error('Erreur lors de la suppression du bilan', error)
    );
  }
}
