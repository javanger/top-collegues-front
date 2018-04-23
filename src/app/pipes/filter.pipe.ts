import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:Array<Collegue>, recherche: string): Array<Collegue> {
    if(!recherche) {
      return value
    }
    return value.filter(v => v.nom.toLowerCase().includes(recherche.toLowerCase()))
  }
}
