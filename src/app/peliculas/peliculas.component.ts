import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Respuesta } from '../respuesta';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  respuesta: Respuesta<Pelicula>[];

  constructor(private swapi: SwapiService) { }

  ngOnInit() {
    this.swapi.get('https://swapi.co/api/films').subscribe(
      respuestaRecibida => this.respuesta = respuestaRecibida
    );
  }

}
