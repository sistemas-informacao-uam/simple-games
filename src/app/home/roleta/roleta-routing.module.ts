import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoletaPage } from './roleta.page';

const routes: Routes = [
  {
    path: '',
    component: RoletaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoletaPageRoutingModule {}
