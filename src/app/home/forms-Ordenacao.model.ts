import { TipoDeValoresEnum } from "./model/tipoDevaloresEnum.model";
import { TipoDeOrdenacaoEnum } from "./model/tipoOrdenacaoEnum.model";







export interface IFormsOrdenacao {

  id?: number;
  tipoOrdenacao?: TipoDeOrdenacaoEnum;
  tipoDeValores?: TipoDeValoresEnum;

}

export class FormsOrdenacao implements IFormsOrdenacao {
  constructor(

    public id?: number,
    public tipoOrdenacao?: TipoDeOrdenacaoEnum,
    public tipoDeValores?: TipoDeValoresEnum
  ) {

    this.id = this.id;

  }
}
