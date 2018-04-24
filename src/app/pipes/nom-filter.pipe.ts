import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from '../models';

@Pipe({
  name: 'nomFilter'
})
export class NomFilterPipe implements PipeTransform {

  transform(items: Collegue[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return (it.nom + " " + it.prenom).toLowerCase().includes(searchText);
    });
  }

}
