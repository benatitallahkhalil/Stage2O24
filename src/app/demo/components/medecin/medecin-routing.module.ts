// medecin-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinListComponent } from './medecin-list/medecin-list.component';

const routes: Routes = [
  { path: '', component: MedecinListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedecinRoutingModule { }
