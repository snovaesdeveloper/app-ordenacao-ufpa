import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Questao1dPageRoutingModule } from './questao1d-routing.module';

import { Questao1dPage } from './questao1d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Questao1dPageRoutingModule
  ],
  declarations: [Questao1dPage]
})
export class Questao1dPageModule {}
