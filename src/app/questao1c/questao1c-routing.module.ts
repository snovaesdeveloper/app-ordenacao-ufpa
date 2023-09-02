import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Questao1cPage } from './questao1c.page';

const routes: Routes = [
  {
    path: '',
    component: Questao1cPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Questao1cPageRoutingModule {}
