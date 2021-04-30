import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoinflipPageRoutingModule } from './coinflip-routing.module';

import { CoinflipPage } from './coinflip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoinflipPageRoutingModule
  ],
  declarations: [CoinflipPage]
})
export class CoinflipPageModule {}
