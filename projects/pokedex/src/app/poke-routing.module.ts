import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemondetailsComponent } from './pokemondetails/pokemondetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'pokemon/page/:name', component: DashboardComponent },
  { path: '', redirectTo: '/pokemon/page/1', pathMatch: 'full' },
  { path: 'pokemon/:name', component: PokemondetailsComponent },
    // { path: 'pokemon/page/:name', component: PokemondetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class PokeRoutingModule { }
