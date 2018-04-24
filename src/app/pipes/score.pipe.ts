import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value >= 100) {
      return '<h3 class="text-success">+' + value + '</h3>';
    } else if (value < -100) {
      return '<h3 class="text-danger">' + value + '</h3>';
    } else if (value < 100 && value > 0){
      return '<h3 class="text-warning">+' + value + '</h3>';
    } else {
      return '<h3 class="text-warning">' + value + '</h3>';
    }
  }

}
