import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackuoPageRoutingModule } from './backuo-routing.module';

import { BackuoPage } from './backuo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BackuoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BackuoPage]
})
export class BackuoPageModule {}
