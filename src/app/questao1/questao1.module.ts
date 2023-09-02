import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Questao1PageRoutingModule } from './questao1-routing.module';

import { Questao1Page } from './questao1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Questao1PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Questao1Page]
})
export class Questao1PageModule {}
