import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { Termino } from '../Termino';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  terminos: Termino[] = [];

  constructor(private swapi: SwapiService) { }

  ngOnInit() {
    this.swapi.get('https://swapi.co/api/').subscribe(
      terminosRecibidos =>
        // console.log(Object.keys(terminos), Object.values(terminos))
        Object.keys(terminosRecibidos).map(
          elemento => this.terminos.push(
            { nombre: elemento, valor: terminosRecibidos[elemento] }))
    );
  }

  terminoSeleccionado(url: string): void {
    // debugger; // Para el código en esta línea en las developer tools
    console.log(url);

    this.swapi.get(url).subscribe(
      respuesta => console.log(respuesta)
    );
  }

}
