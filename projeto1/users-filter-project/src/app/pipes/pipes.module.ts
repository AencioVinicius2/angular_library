import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone.pipe';
import { AddressPipe } from './address.pipe';
import { ActivePipe } from './active.pipe';

@NgModule({
  declarations: [
    PhonePipe,
    AddressPipe,
    ActivePipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PhonePipe,
    AddressPipe,
    ActivePipe,
  ]
})
export class PipesModule { }
