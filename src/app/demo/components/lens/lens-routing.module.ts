import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LensListComponent } from './lens-list/lens-list.component';

const routes: Routes = [
    { path: '', component: LensListComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LensRoutingModule { }
