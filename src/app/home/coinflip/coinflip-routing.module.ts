import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoinflipPage } from './coinflip.page';

const routes: Routes = [
  {
    path: '',
    component: CoinflipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinflipPageRoutingModule {}
