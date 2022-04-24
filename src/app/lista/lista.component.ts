import { Component, OnInit } from '@angular/core';
import { Czlowiek } from '../czlowiek.interface';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public ludzie: Array<Czlowiek>;

  constructor(private listaService: ListaService) {
    this.ludzie = this.listaService.loadLudzie();
   }

  ngOnInit(): void {
  }

}
