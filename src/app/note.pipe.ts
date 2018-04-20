import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'note'
})
export class NotePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
