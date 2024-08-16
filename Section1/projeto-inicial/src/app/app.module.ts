import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { CardButtonComponent } from './card-button/card-button.component';
import { CardComponent } from './card/card.component';
import { CardRoxoComponent } from './card-roxo/card-roxo.component';
import { CardButtonCancelComponent } from './card-button-cancel/card-button-cancel.component';
//import { InlineComponent } from './inline/inline.component';

@NgModule({
  declarations: [
    AppComponent,
    //CardButtonCancelComponent,
    //InlineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
