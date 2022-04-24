import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  public title = 'projekt';
  
  @Input()
  public imie: string = 'cwqc';

  constructor() {
    this.title += ' 1';
  }

  public dodaj(a: number,b: number):number {
    return a + b;
  }

}
