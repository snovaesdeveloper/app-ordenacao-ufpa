import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsOrdenacao } from './../home/forms-Ordenacao.model';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TipoDeValoresEnum } from '../home/model/tipoDevaloresEnum.model';
import { TipoDeOrdenacaoEnum } from '../home/model/tipoOrdenacaoEnum.model';

@Component({
  selector: 'app-backuo',
  templateUrl: './backuo.page.html',
  styleUrls: ['./backuo.page.scss'],
})
export class BackuoPage implements OnInit {
  form: FormGroup;
  formsOrdenacao: FormsOrdenacao = new FormsOrdenacao();
  vetorCopia = [];

  min = 0;
  max = 10;
  trocasFora = 0;
  trocasInternas = 0;

  resultado: any;
  vetorIniciados = [];
  vetorOrdenado = [];


  inicio = [];


  trocasSelecitonSort = 0;
  tempoFinal;

  fim = [];

  opcoesDeValores = [
    { tipo: TipoDeValoresEnum._10, label: '10', ischeck: false, valor: '10' },
    { tipo: TipoDeValoresEnum._100, label: '100', ischeck: false, valor: '100' },
    { tipo: TipoDeValoresEnum._1000, label: '1000', ischeck: false, valor: '1000' },
    { tipo: TipoDeValoresEnum._10000, label: '10000', ischeck: false, valor: '100000' }

  ];





  opcoesOrdenacao = [
    { tipo: TipoDeOrdenacaoEnum.selectionSort, label: 'selectionSort', ischeck: false, valor: 'selectionSort' },
    { tipo: TipoDeOrdenacaoEnum.bubbleSort, label: 'bubbleSort', ischeck: false, valor: 'bubbleSort' },
    { tipo: TipoDeOrdenacaoEnum.insertSort, label: 'insertSort', ischeck: false, valor: 'insertSort' }

  ];
  constructor(
    private formBuilder: FormBuilder,
    private cdref: ChangeDetectorRef,
  ) { }

  ngAfterContentChecked() {

    this.cdref.detectChanges();

  }


  ngDoCheck() {

    if (this.form.valid) {
      console.log('valido', this.form);
      console.log('chamando tipoDeValores ');
    //  let a = this.formsOrdenacao.tipoDeValores;
    //  if (this.formsOrdenacao.tipoDeValores != a) {
        this.gerarRamdom(this.formsOrdenacao.tipoDeValores);
    //  }


    }
  }

  ngOnInit() {
    this.initForm();
    // console.log(this.vetorIniciado);
  }


  initForm() {
    this.form = this.formBuilder.group({

      opcoesOrdenacao: new FormControl('', Validators.required),
      opcoesDeValores: new FormControl('', Validators.required)

    });
  }


  iniciar(formsOrdenacao: FormsOrdenacao) {
    console.log(formsOrdenacao);


    this.validaOrdenacao(formsOrdenacao);


  }



  resetForms() {
    this.form.reset();
    this.trocasFora = 0;
    this.vetorOrdenado = [];
    this.vetorCopia = [];
    this.vetorIniciados = [];
    this.tempoFinal = [];
  }

  gerarRamdom(recebeMaximo) {
    this.vetorCopia = [];
    console.log('gerandoRando', recebeMaximo);
    let maximo = recebeMaximo;

    let arr = [];
    for (let i = 0; i < maximo; i++) {
      arr[i] = i + 1;
    }

    for (let i = 0; i < recebeMaximo; i++) {

      this.vetorCopia.push(i);

    };

    this.inverterRamdom(this.vetorCopia);
  }

  inverterRamdom(arr) {



    let p;
    let n;
    let tmp;
    for (p = arr.length; p;) {
      n = Math.random() * p-- | 0;
      tmp = arr[n];
      arr[n] = arr[p];
      arr[p] = tmp;

    }
    this.vetorCopia = arr;
  }



  validaOrdenacao(formsOrdenacao: FormsOrdenacao) {



    if (formsOrdenacao.tipoOrdenacao === 'bubbleSort') {
      console.log('bubbleSort');



      this.validaBubbleSort();

    }

    if (formsOrdenacao.tipoOrdenacao === 'insertSort') {
      console.log('insertSort');
      this.validaInsertSort();
    }
    if (formsOrdenacao.tipoOrdenacao === 'selectionSort') {



      this.validaSelectionSort();



    }

  }

  validaSelectionSort() {

    let aux = this.vetorCopia;

    if (this.formsOrdenacao.tipoDeValores === '10') {
      // this.gerarRamdom(10);

      this.selectionSort(aux);
      console.log('selectionSortvetor10');



    };

    if (this.formsOrdenacao.tipoDeValores === '100') {
      this.selectionSort(aux);
      console.log('selectionSortvetor100');

    };

    if (this.formsOrdenacao.tipoDeValores === '1000') {

      this.selectionSort(aux);
      console.log('selectionSortvetor1000');


    };

    if (this.formsOrdenacao.tipoDeValores === '10000') {
      this.selectionSort(aux);
      console.log('selectionSortvetor10000');

    };
  }



  validaInsertSort() {
    let aux = this.vetorCopia ;
    if (this.formsOrdenacao.tipoDeValores === '10') {
      this.insertSort(aux);
      console.log('validaInsertSort10');


    };

    if (this.formsOrdenacao.tipoDeValores === '100') {
      this.insertSort(aux);
      console.log('validaInsertSort100');

    };

    if (this.formsOrdenacao.tipoDeValores === '1000') {
      this.insertSort(aux);
      console.log('validaInsertSort1000');

    };

    if (this.formsOrdenacao.tipoDeValores === '10000') {
      this.insertSort(aux);
      console.log('validaInsertSort10000');

    };

  }


  validaBubbleSort() {
    let aux = this.vetorCopia;
    if (this.formsOrdenacao.tipoDeValores === '10') {

      this.bubbleSort(aux);
      console.log('validaBubbleSortvetor10');




    };

    if (this.formsOrdenacao.tipoDeValores === '100') {
      this.bubbleSort(aux);
      console.log('bubbleSortSortvetor100');

    };

    if (this.formsOrdenacao.tipoDeValores === '1000') {
      this.bubbleSort(aux);
      console.log('bubbleSortortvetor1000');

    };

    if (this.formsOrdenacao.tipoDeValores === '10000') {
      this.bubbleSort(aux);
      console.log('bubbleSortortvetor10000');

    };

  }



  quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr.splice(pivotIndex, 1)[0];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...this.quickSort(left), pivot, ...this.quickSort(right)];
  }



  bubbleSort(vetor) {
    //BUBBLE SORT O(N^2


    let inicioTempo =  performance.now();

    let teste = [];

    let trocas = 0;

    //BUBBLE SORT O(N^2)
    let aux;
    for (var t = 1;  t<= 305; t++) {
      for (var x = 1; x <= 305; x++) {
            if(x != t){
               teste.push(t+'|'+x);
            }
        }
        for (let i = 0; i < vetor.length; i++) { // O(N)
          for (let j = i + 1; j < vetor.length; j++) { //O(N)
            if (vetor[i] > vetor[j]) {
              aux = vetor[j];
              //      System.out.println("aux" + (aux));
              vetor[j] = vetor[i];
              //    System.out.println("Vetor i" + (vetor[j]));
              vetor[i] = aux;
              //  System.out.println("Vetor j" + (vetor[i]));
              trocas++;
              //   System.out.println("Trocas" + (trocas));
            }
          }
        }
        var fimTempo = performance.now();
    }


    this.vetorOrdenado = vetor;
    this.trocasFora = trocas;
    console.log(this.vetorOrdenado);



    console.log(teste);
    this.tempoFinal = (fimTempo - inicioTempo);
    alert('Tempo de excução: ' + (fimTempo - inicioTempo));

  }







  selectionSort(arr) {
    //selectionSort

    let inicioTempo =  performance.now();

    let teste = [];

    let trocas = 0;


    let x = 0;
    const len: number = arr.length;
    let minInd: number = -1;

    for (let t = 1;  t<= 305; t++) {
      for (let x = 1; x <= 305; x++) {
            if(x != t){
               teste.push(t+'|'+x);
            }
        }

    for (let i = 0; i < (len - 1); i++) {
      minInd = i;

      for (let j = (i + 1); j < len; j++) {
        if (arr[j] < arr[minInd]) {
          minInd = j;
        }
      }

      if (minInd !== i) {
        [arr[i], arr[minInd]] = [arr[minInd], arr[i]];
      }
      trocas++;
    }
    var fimTempo = performance.now();


  }
  this.vetorOrdenado = arr;
  this.trocasFora = trocas;
  console.log(this.vetorOrdenado);



  console.log(teste);
  this.tempoFinal = (fimTempo - inicioTempo);
  alert('Tempo de excução: ' + (fimTempo - inicioTempo));
}


  insertSort(vetor) {

    let inicioTempo =  performance.now();

    let teste = [];

    let trocas = 0;



    for (let t = 1;  t<= 305; t++) {
      for (let x = 1; x <= 305; x++) {
            if(x != t){
               teste.push(t+'|'+x);
            }
        }



    for (let i = 0; i < vetor.length; i++) {
      const aux = vetor[i];
      let j = i - 1;
      while (j >= 0 && vetor[j] > aux) {
        vetor[j + 1] = vetor[j];
        j--;
        trocas++;
      }
      vetor[j + 1] = aux;
      trocas++;

    }
    var fimTempo = performance.now();

  }

  this.vetorOrdenado = vetor;
  this.trocasFora = trocas;
  console.log(this.vetorOrdenado);



  console.log(teste);
  this.tempoFinal = (fimTempo - inicioTempo);
  alert('Tempo de excução: ' + (fimTempo - inicioTempo));

}

}
