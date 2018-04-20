import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, args?: any): any {
    let color = "text-warning";
    let sign = "";
    if (value > 0) {
      color = "text-success";
      sign = "+";
    } else if (value < 0) {
      color = "text-danger";
      sign = "-";
    }
    return `score: <h3 class="${color}">${sign} ${value}</h3>`;
  }

}
