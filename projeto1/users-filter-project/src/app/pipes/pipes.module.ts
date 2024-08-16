import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { ActivePipe } from './active.pipe';
import { RegistrationDatePipe } from './registration-date.pipe';

@NgModule({
  declarations: [
    PhonePipe,
    AddressPipe,
    ActivePipe,
    RegistrationDatePipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PhonePipe,
    AddressPipe,
    ActivePipe,
    RegistrationDatePipe,
  ]
})
export class PipesModule { }
