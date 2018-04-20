import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let score:string 
    if (value>0){
      score = `<p class="teal-text score">+${value}</p>`

    }else if(value<0){
      score = `<p class="deep-orange-text score"> ${value}</p>`
    }
    else{
      score = `<p class="brown-text score"> ${value}</p>`
    }
    return score;
  }

}
