import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardRoxoComponent } from './card-roxo/card-roxo.component';
import { CardButtonComponent } from './card-button/card-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
