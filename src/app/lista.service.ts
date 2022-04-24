import { Injectable } from '@angular/core';
import { Czlowiek } from './czlowiek.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  constructor() { }

  public loadLudzie(): Array<Czlowiek> {
    return [
      {id: 1, imie: "Jan", nazwisko: "Kowal"},
      {id: 2, imie: "Adam", nazwisko: "Nowak"},
      {id: 3, imie: "Edward", nazwisko: "Piorun"}
    ]
  }
}
