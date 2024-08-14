import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MatListModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class AngularMaterialModule { }
