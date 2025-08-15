import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardButtonRoxoComponent } from '../card-button-roxo/card-button-roxo.component';



@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardButtonRoxoComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardButtonRoxoComponent
  ]
})
export class CardsModule { }
