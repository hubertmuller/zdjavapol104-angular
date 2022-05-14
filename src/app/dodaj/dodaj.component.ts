import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Czlowiek } from '../czlowiek.interface';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.scss']
})
export class DodajComponent implements OnInit {

  public forma: FormGroup = new FormGroup (
    {
      imie: new FormControl('Jan', {
        validators: [Validators.minLength(2), Validators.maxLength(30)],
        updateOn: "change"
      }),
      nazwisko: new FormControl('Kowalski', {
        validators: [Validators.minLength(3), Validators.maxLength(60)],
        updateOn: "change"
      })
    }
  );

  constructor() { 
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

    
  }

}
