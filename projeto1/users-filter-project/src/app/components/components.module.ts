import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FilterComponent } from './filter/filter.component';
import { UsersListComponent } from './users-list/users-list.component';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  //--components standalone não precisam ser declarados--//
  declarations: [
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    PipesModule,
  ],
  exports: [
    AngularMaterialModule,
    UserDetailsComponent,
    FilterComponent,
    UsersListComponent,
  ]
})
export class ComponentsModule { }
