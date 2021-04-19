import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JogodavelhaPage } from './jogodavelha.page';

const routes: Routes = [
  {
    path: '',
    component: JogodavelhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JogodavelhaPageRoutingModule {}
