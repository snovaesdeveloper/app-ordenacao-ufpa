import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Questao1bPageRoutingModule } from './questao1b-routing.module';

import { Questao1bPage } from './questao1b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Questao1bPageRoutingModule
  ],
  declarations: [Questao1bPage]
})
export class Questao1bPageModule {}
