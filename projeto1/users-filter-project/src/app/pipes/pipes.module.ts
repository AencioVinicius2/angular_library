import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { ActivePipe } from './active.pipe';
import { RegistrationDatePipe } from './registration-date.pipe';
import { DashIfEmptyPipe } from './dash-if-empty.pipe';

@NgModule({
  declarations: [
    PhonePipe,
    AddressPipe,
    ActivePipe,
    RegistrationDatePipe,
    DashIfEmptyPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PhonePipe,
    AddressPipe,
    ActivePipe,
    RegistrationDatePipe,
    DashIfEmptyPipe,
  ]
})
export class PipesModule { }
