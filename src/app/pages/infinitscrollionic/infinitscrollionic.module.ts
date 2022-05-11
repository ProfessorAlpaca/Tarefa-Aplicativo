import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitscrollionicPageRoutingModule } from './infinitscrollionic-routing.module';

import { InfinitscrollionicPage } from './infinitscrollionic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitscrollionicPageRoutingModule
  ],
  declarations: [InfinitscrollionicPage]
})
export class InfinitscrollionicPageModule {}
