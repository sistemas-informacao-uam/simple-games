import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'snake',
    loadChildren: () => import('./snake/snake.module').then( m => m.SnakePageModule)
  },
  {
    path: 'jogodavelha',
    loadChildren: () => import('./jogodavelha/jogodavelha.module').then( m => m.JogodavelhaPageModule)
  },
  {
    path: 'roleta',
    loadChildren: () => import('./roleta/roleta.module').then( m => m.RoletaPageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./store/store.module').then( m => m.StorePageModule)
  },
  {
    path: 'jokenpo',
    loadChildren: () => import('./jokenpo/jokenpo.module').then( m => m.JokenpoPageModule)
  },  {
    path: 'coinflip',
    loadChildren: () => import('./coinflip/coinflip.module').then( m => m.CoinflipPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
