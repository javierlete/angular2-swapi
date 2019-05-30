import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

const routes: Routes = [
  { path: '', component: MenuPrincipalComponent },
  { path: 'films', component: PeliculasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
