import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JogodavelhaPageRoutingModule } from './jogodavelha-routing.module';

import { SquareComponent } from '../components/square/square.component';
import { JogodavelhaPage } from './jogodavelha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JogodavelhaPageRoutingModule
  ],
  declarations: [JogodavelhaPage, SquareComponent]
})
export class JogodavelhaPageModule {}
