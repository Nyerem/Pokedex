import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonApi, PokeURL} from './pokemon.model';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokeSpecies } from './pokemon.species';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService implements OnInit {
  private pokeApi = 'https://pokeapi.co/api/v2/pokemon/';
  private pokeSpecies = 'https://pokeapi.co/api/v2/pokemon-species/';
  private pokeLimit = '?offset=500&limit=35';
  // private pokeLimit = '?limit=35';
  ngOnInit() {
  }
  constructor(private http: HttpClient) { }

  getPokemon(): Observable<PokemonApi> {
    return this.http.get<PokemonApi>(this.pokeApi + this.pokeLimit);
  }

  getPokeName(name: string): Observable<PokeURL> {
    return this.http.get<PokeURL>(this.pokeApi + name);
  }

  getPokeSpecies(name: string): Observable<PokeSpecies> {
    return this.http.get<PokeSpecies>(this.pokeSpecies + name);
  }
}
