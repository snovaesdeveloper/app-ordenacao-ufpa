import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Questao1aPageRoutingModule } from './questao1a-routing.module';

import { Questao1aPage } from './questao1a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Questao1aPageRoutingModule
  ],
  declarations: [Questao1aPage]
})
export class Questao1aPageModule {}
