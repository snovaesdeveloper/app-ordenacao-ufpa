import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Questao1Page } from './questao1.page';

const routes: Routes = [
  {
    path: '',
    component: Questao1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Questao1PageRoutingModule {}
