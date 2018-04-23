import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let score:string 
    if (value>0){
      score = `<span class="teal-text score">+${value}</span>`

    }else if(value<0){
      score = `<span class="deep-orange-text score"> ${value}</span>`
    }
    else{
      score = `<span class="brown-text score"> ${value}</span>`
    }
    return score;
  }
}
