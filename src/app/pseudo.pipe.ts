import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from './models';

@Pipe({
  name: 'pseudo'
})
export class PseudoPipe implements PipeTransform {

  

  transform(value:Array<Collegue>, inputPseudo):Array<Collegue>{
       if(!inputPseudo){
        return value;
    }         
    return value.filter( v => {
      return v.pseudo.toLowerCase().includes(inputPseudo.toLowerCase())
    })
  }
  

}
