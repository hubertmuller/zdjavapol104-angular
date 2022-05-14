import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-usun',
  templateUrl: './usun.component.html',
  styleUrls: ['./usun.component.scss']
})
export class UsunComponent implements OnInit {

  public idUsuwanego = "";
  public usunieto = false;
  public blad = false;

  constructor(private listaService: ListaService,
    private route: ActivatedRoute ) { 

      this.route.params.subscribe(
        (params) => {
          this.idUsuwanego = params['id'];
          // wywolanie usuwania w serwisie
          listaService.usunOsobe(this.idUsuwanego).subscribe(
            (_) => {
              this.usunieto = true;
            },
            (_error) => {
              this.blad = true;
            }
          );

        }
      )
    }

  ngOnInit(): void {}


}
