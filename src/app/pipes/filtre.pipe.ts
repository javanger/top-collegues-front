import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../model'

@Pipe({
  name: 'filtre'
})
export class FiltrePipe implements PipeTransform {

  transform(value:Collegue[], mot: string): Collegue[] {
    if(!value) 
      return []
    if(!mot) 
      return value
    mot = mot.toLowerCase()
    return value.filter( col => {
      return col.pseudo.toLowerCase().includes(mot);
    });
  }
}
