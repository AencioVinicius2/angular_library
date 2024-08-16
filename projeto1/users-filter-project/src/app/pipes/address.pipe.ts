import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/addres.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const INVALID_ADDRESS =
     !address ||
     !address.rua ||
     address.numero === null ||
     address.numero === undefined ||
     !address.cidade ||
     !address.estado ||
     !address.pais;

     if(INVALID_ADDRESS) {
      return 'Endereço não disponível ou inválido';
     }
     return `${address.rua}, ${address.numero}, ${address.cidade} - ${address.estado}, ${address.pais}`
  }

}
