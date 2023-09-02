import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questao1d'
})
export class Questao1dPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
