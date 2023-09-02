import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questao1a',
  templateUrl: './questao1a.page.html',
  styleUrls: ['./questao1a.page.scss'],
})
export class Questao1aPage implements OnInit {

  sequence: number[];
  sortedSequence: number[];
  isSorting: boolean;

  constructor() {
    this.sequence = [];
    this.sortedSequence = [];
    this.isSorting = false;
  }

  generateRandomSequence(length: number): number[] {
    const sequence: number[] = [];
    for (let i = 0; i < length; i++) {
      sequence.push(Math.floor(Math.random() * 100) + 1);
    }
    return sequence;
  }

  startSorting() {
    this.isSorting = true;
    this.sequence = this.generateRandomSequence(10);
    console.log('Sequência original:', this.sequence);
    this.sortedSequence = this.quickSort([...this.sequence]);
    console.log('Sequência ordenada:', this.sortedSequence);
  }

  resetSorting() {
    this.isSorting = false;
    this.sequence = [];
    this.sortedSequence = [];
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

  ngOnInit() {
  }

}
