import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value, args){
    if(value == 0){
      return `<p class="score white-text">${value}</p>`;
    }
    else if(value > 0){
      return `<p class="score teal-text"> +${value}</p>`;
    }
    else if(value < 0){
      return `<p class="score deep-orange-text">${value}</p>`;
    }
  }
}