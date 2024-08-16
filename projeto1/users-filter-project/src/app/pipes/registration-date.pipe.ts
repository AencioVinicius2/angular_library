import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registrationDate'
})
export class RegistrationDatePipe implements PipeTransform {

  transform(registrationDate: string): string {
    const VALID_DATE = !registrationDate || registrationDate === undefined;
    if(VALID_DATE)
    {
      return 'Data invalída';
    }
    return `${registrationDate.substring(8,10)}/${registrationDate.substring(5,7)}/${registrationDate.substring(0,4)}`;
  }

}
