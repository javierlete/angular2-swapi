import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../swapi.service';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula: Pelicula;

  constructor(
    private ruta: ActivatedRoute,
    private swapi: SwapiService
  ) { }

  ngOnInit() {
    const id: number = +this.ruta.snapshot.paramMap.get('id');
    this.swapi.get('https://swapi.co/api/films/' + id).subscribe(
      peliculaRecibida => {
        this.pelicula = peliculaRecibida;
        console.log(this.pelicula);
      }
    );
  }

}
