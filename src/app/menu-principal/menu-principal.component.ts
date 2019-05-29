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
    this.swapi.get('http://swapi.co/api').subscribe(
      terminos => console.log(Object.keys(terminos), Object.values(terminos))
    );
  }

}
