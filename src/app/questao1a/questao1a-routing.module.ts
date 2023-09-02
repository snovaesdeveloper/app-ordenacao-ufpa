import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Questao1aPage } from './questao1a.page';

const routes: Routes = [
  {
    path: '',
    component: Questao1aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Questao1aPageRoutingModule {}
