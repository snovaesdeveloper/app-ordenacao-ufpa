import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Questao1bPage } from './questao1b.page';

const routes: Routes = [
  {
    path: '',
    component: Questao1bPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Questao1bPageRoutingModule {}
