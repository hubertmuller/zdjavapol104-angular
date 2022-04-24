import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { StopkaComponent } from './stopka/stopka.component';
import { ListaComponent } from './lista/lista.component';
import { DodajComponent } from './dodaj/dodaj.component';
import { UsunComponent } from './usun/usun.component';
import { BladComponent } from './blad/blad.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NaglowekComponent,
    StopkaComponent,
    ListaComponent,
    DodajComponent,
    UsunComponent,
    BladComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
