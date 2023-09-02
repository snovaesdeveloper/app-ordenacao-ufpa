import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackuoPage } from './backuo.page';

const routes: Routes = [
  {
    path: '',
    component: BackuoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackuoPageRoutingModule {}
