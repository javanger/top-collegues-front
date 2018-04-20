import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(collegues: Collegue[], pseudo?: string): Collegue[] {
    if (pseudo && collegues) {
      const r = collegues
        .filter(c => c.pseudo.includes(pseudo));
      return r;
    } else {
      return collegues;
    }
  }

}
