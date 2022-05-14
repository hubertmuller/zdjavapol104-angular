import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-edytuj',
  templateUrl: './edytuj.component.html',
  styleUrls: ['./edytuj.component.scss']
})
export class EdytujComponent implements OnInit {
  public idEdytowanego: any;

  constructor(private listaService: ListaService,
    private route: ActivatedRoute ) { 

      this.route.params.subscribe(
        (params) => {
          this.idEdytowanego = params['id'];
          // wywolanie usuwania w serwisie
          listaService.pobierzOsobe(this.idEdytowanego).subscribe(
            (_osoba) => {
              //ustawienie wartosci z osoba do formularza
            }
          );

        }
      )
    }

  ngOnInit(): void {
  }

}
