import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Questao1dPage } from './questao1d.page';

const routes: Routes = [
  {
    path: '',
    component: Questao1dPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Questao1dPageRoutingModule {}
