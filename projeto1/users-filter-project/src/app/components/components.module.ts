import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
@NgModule({
  //--components standalone não precisam ser declarados--//
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    AngularMaterialModule,
    UserDetailsComponent
  ]
})
export class ComponentsModule { }
