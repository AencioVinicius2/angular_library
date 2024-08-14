import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
@NgModule({
  //--components standalone não precisam ser declarados--//
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    AngularMaterialModule,
  ]
})
export class ComponentsModule { }
