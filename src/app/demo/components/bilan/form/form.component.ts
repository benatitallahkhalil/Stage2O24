import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BilanService } from '../bilan.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  bilanForm: FormGroup;
  isAddMode: boolean;
  idBilan: number;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bilanService: BilanService
  ) { }

  ngOnInit(): void {
    this.idBilan = this.route.snapshot.params['id'];
    this.isAddMode = !this.idBilan;

    this.bilanForm = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      mobile: [''],
      poids: [''],
      taille: [''],
      prix: [''],
      createur: [''],
      dateCreation: [''] // Utilisez un date picker ou une valeur par défaut ici
    });

    if (!this.isAddMode) {
      this.bilanService.getBilanById(this.idBilan)
        .subscribe(
          bilan => {
            this.bilanForm.patchValue(bilan);
          },
          error => {
            console.error('Erreur lors de la récupération du bilan', error);
            // Gérer l'erreur, par exemple rediriger vers une page d'erreur ou afficher un message à l'utilisateur
          }
        );
    }
  }onSubmit(): void {
    if (this.bilanForm.valid) {
      if (this.isAddMode) {
        this.addBilan();
      } else {
        this.updateBilan();
      }
    } else {
      this.errorMessage = 'Veuillez remplir correctement tous les champs du formulaire.';
    }
  }

  private addBilan(): void {
    this.bilanService.addBilan(this.bilanForm.value)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de l\'ajout du bilan', error);
          this.errorMessage = error.error.title; // Afficher le titre de l'erreur à l'utilisateur
          return throwError(error);
        })
      )
      .subscribe(() => {
        this.router.navigate(['/bilan']);
      });
  }

  private updateBilan(): void {
    
    this.bilanService.updateBilan(this.idBilan, this.bilanForm.value)
      .subscribe(
        () => {
          this.router.navigate(['/bilan']);
        },
        error => {
          console.error('Erreur lors de la mise à jour du bilan', error);
          if (error.error && error.error.title) {
            this.errorMessage = error.error.title; // Affichez le titre de l'erreur
          } else if (error.error && error.error.errors) {
            this.errorMessage = Object.values(error.error.errors).join(' '); // Affichez les erreurs de validation
          } else {
            this.errorMessage = 'Une erreur est survenue lors de la mise à jour du bilan.';
          }
        }
      );
  }





}
