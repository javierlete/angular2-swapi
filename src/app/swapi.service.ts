import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(
    private http: HttpClient
  ) { }

  get(url: string): Observable<any> {
    // return this.http.get(url);
    return of({
      people: 'https://swapi.co/api/people/',
      planets: 'https://swapi.co/api/planets/',
      films: 'https://swapi.co/api/films/',
      species: 'https://swapi.co/api/species/',
      vehicles: 'https://swapi.co/api/vehicles/',
      starships: 'https://swapi.co/api/starships/'
      });
  }
}
