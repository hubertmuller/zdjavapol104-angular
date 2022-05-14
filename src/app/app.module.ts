import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { StopkaComponent } from './stopka/stopka.component';
import { ListaComponent } from './lista/lista.component';
import { DodajComponent } from './dodaj/dodaj.component';
import { UsunComponent } from './usun/usun.component';
import { BladComponent } from './blad/blad.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
