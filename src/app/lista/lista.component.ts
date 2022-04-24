import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Czlowiek } from '../czlowiek.interface';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public ludzie: Array<Czlowiek> = [];

  constructor(private listaService: ListaService) {
    this.listaService.loadLudzie().subscribe(
      (dane) => {
        this.ludzie = dane;
        console.log(dane);
      }
    );
   }

  ngOnInit(): void {
  }

}
