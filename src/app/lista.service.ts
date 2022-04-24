import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Czlowiek } from './czlowiek.interface';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private http: HttpClient) { }

  public loadLudzie(): Observable<Array<Czlowiek>> {
    const naglowki = new HttpHeaders();
    naglowki.append('Accept', 'application/json');
    return this.http.get<Array<Czlowiek>>('http://localhost:3002', {headers: naglowki})
  }
}
