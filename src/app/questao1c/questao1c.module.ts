import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Questao1cPageRoutingModule } from './questao1c-routing.module';

import { Questao1cPage } from './questao1c.page';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { NgChartjsModule } from 'ng-chartjs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Questao1cPageRoutingModule,
    NgChartsModule,
    NgChartjsModule
  ],
  declarations: [Questao1cPage],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ]
})
export class Questao1cPageModule {}
