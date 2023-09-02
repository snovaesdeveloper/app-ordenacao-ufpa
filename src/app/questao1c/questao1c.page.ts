import { Component } from '@angular/core';

@Component({
  selector: 'app-questao1c',
  templateUrl: './questao1c.page.html',
  styleUrls: ['./questao1c.page.scss'],
})
export class Questao1cPage {
  sequence: number[];
  sortedSequence: number[];
  swaps: number;
  sortingType: string;
  numElements: number;
  iterationResults: IterationResult[];
  history: IterationResult[][];

  constructor() {
    this.sequence = [];
    this.sortedSequence = [];
    this.swaps = 0;
    this.sortingType = '';
    this.numElements = 0;
    this.iterationResults = [];
    this.history = [];
  }

  generateRandomSequence(numElements: number): void {
    this.sequence = Array.from({ length: numElements }, () => Math.floor(Math.random() * 100) + 1);
  }

  quickSort(): void {
    this.sortedSequence = [...this.sequence];
    this.swaps = 0;
    this.sortingType = 'QuickSort';

    this.sort(this.sortedSequence, 0, this.sortedSequence.length - 1);

    this.iterationResults.push({ type: this.sortingType, numElements: this.numElements, swaps: this.swaps });
  }



  sort(arr: number[], low: number, high: number): void {
    if (low < high) {
      const partitionIndex = this.partition(arr, low, high);

      this.sort(arr, low, partitionIndex - 1);
      this.sort(arr, partitionIndex + 1, high);
    }
  }

  partition(arr: number[], low: number, high: number): number {
    const pivotIndex = Math.floor((low + high) / 2);
    const pivot = arr[pivotIndex];

    this.swap(arr, pivotIndex, high);

    let i = low;
    let hasSwaps = false;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        this.swap(arr, i, j);
        i++;
        hasSwaps = true;
      }
    }

    this.swap(arr, i, high);
    if (hasSwaps) {
      this.swaps++;
    }

    return i;
  }

  swap(arr: number[], i: number, j: number): void {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  reset(): void {
    if (this.iterationResults.length > 0) {
      this.history.push([...this.iterationResults]);
    }

    this.sequence = [];
    this.sortedSequence = [];
    this.swaps = 0;
    this.sortingType = '';
    this.numElements = 0;
    this.iterationResults = [];
  }


}



interface IterationResult {
  type: string;
  numElements: number;
  swaps: number;
}

// Resto do código...
