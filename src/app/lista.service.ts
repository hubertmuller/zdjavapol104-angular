import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Czlowiek } from './czlowiek.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaService {


  constructor(private http: HttpClient) { }

  public loadLudzie(): Observable<Array<Czlowiek>> {
    const naglowki = new HttpHeaders();
    naglowki.append('Accept', 'application/json');
    return this.http.get<Array<Czlowiek>>(environment.endpointURL, {headers: naglowki})
  }

  public usunOsobe(idUsuwanego: string): Observable<any> {
    const naglowki = new HttpHeaders();
    naglowki.append('Accept', 'application/json');
    return this.http.delete<any>(environment.endpointURL + "/czlowiek/" + idUsuwanego, {headers: naglowki})
  }
}
