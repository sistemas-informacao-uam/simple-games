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
  },  {
    path: 'jogodavelha',
    loadChildren: () => import('./jogodavelha/jogodavelha.module').then( m => m.JogodavelhaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
