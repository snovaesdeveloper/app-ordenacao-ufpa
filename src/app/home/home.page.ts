
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsOrdenacao } from './forms-Ordenacao.model';
import { TipoDeValoresEnum } from './model/tipoDevaloresEnum.model';
import { TipoDeOrdenacaoEnum } from './model/tipoOrdenacaoEnum.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {




  constructor(
    private formBuilder: FormBuilder,
    private cdref: ChangeDetectorRef,
  ) { }








  ngOnInit() {
  }

}
