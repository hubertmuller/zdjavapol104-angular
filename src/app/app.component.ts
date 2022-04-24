import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'projekt';
  constructor() {
    this.title += ' 1';
  }
  public dodaj(a: number,b: number):number {
    return a + b;
  }

}
