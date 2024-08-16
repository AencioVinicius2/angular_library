import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'active'
})
export class ActivePipe implements PipeTransform {

  transform(active: boolean): string {
    return active ? 'Sim' : 'Não'
  }

}
