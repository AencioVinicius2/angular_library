import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'dashIfEmpty'
})
export class DashIfEmptyPipe implements PipeTransform {
  transform(value: any): string | any {
    let IS_EMPTY = value === undefined || value === null || value === '';
    IS_EMPTY ? '-' : value;
  }

}
