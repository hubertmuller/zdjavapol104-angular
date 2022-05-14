import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Czlowiek } from '../czlowiek.interface';
import { imieValidator } from '../imie.validator';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.scss']
})
export class DodajComponent implements OnInit {

  public zapisano = false;
  public forma: FormGroup = new FormGroup (
    {
      imie: new FormControl('', {
        validators: [Validators.minLength(2), Validators.maxLength(30), imieValidator('Hubert')],
        updateOn: "change"
      }),
      nazwisko: new FormControl('', {
        validators: [Validators.minLength(3), Validators.maxLength(60)],
        updateOn: "change"
      })
    }
  );

  constructor(private listaService: ListaService) { 
    this.forma.controls['imie'].valueChanges.subscribe(
      (wartosc) => {
        if (wartosc === 'Piotr') this.forma.controls['nazwisko'].setValue('Nowak');
      }
    )
  }

  ngOnInit(): void {
  }

  public zapisz() {
    const czlowiek: Czlowiek = {
      imie: this.forma.controls['imie'].value,
      nazwisko: this.forma.controls['nazwisko'].value,
    }

    this.listaService.dodajOsobe(czlowiek).subscribe(
      (_) => {
        this.zapisano = true;
      }
    )


  }

}
