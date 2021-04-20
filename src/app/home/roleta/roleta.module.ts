import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoletaPageRoutingModule } from './roleta-routing.module';

import { RoletaPage } from './roleta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoletaPageRoutingModule
  ],
  declarations: [RoletaPage]
})
export class RoletaPageModule {}
