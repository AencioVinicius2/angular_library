import { NgModule } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonComponent } from '../card-button/card-button.component';

@NgModule({
  declarations: [
    CardButtonComponent,
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardButtonComponent,
    CardComponent,
    CardRoxoComponent
  ],
})
export class CardsModule { }
