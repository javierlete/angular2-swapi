import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { indice, peliculas } from './mock-swapi';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private http: HttpClient
  ) { }

  get(url: string): Observable<any> {
    // return this.http.get(url);
    const concepto = url.split('/')[4];
    const id: number = +url.split('/')[5];

    switch (concepto) {
      case 'films':
        if (id) {
          return of(peliculas.results[id-1]);
        } else {
          return of(peliculas);
        }
      default:
        return of(indice);
    }
  }
}
