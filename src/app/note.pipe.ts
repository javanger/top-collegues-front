import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'note'
})
export class NotePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value > 0){
      return `<p class="note green-text">+${value}</p>`;
    }else if ( value < 0){

      return `<p class="note red-text">${value}</p>`;
    }else if ( value === 0){
      return `<p class="note orange-text">${value}</p>`;
    }
    return null;
  }
}
