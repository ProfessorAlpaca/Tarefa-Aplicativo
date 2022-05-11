import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitscrollionicPage } from './infinitscrollionic.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitscrollionicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitscrollionicPageRoutingModule {}
