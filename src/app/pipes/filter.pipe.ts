import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:Array<Collegue>, inputRecherche):Array<Collegue>{
    if(!inputRecherche){
        return value;
    }         
    return value.filter( v => {return v.pseudo.toLowerCase().includes(inputRecherche.toLowerCase())})
  }
}