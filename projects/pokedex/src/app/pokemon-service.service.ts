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
  private pokeOffset = 0;
  private pokeLimit = 'limit=35';
  pokePage: number;
  // private pokeLimit = '?limit=35';
  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit() {
  }
  constructor(private http: HttpClient) { }

  getPokemon(): Observable<PokemonApi> {
    return this.http.get<PokemonApi>(this.pokeApi + '?offset=' + this.pokeOffset + '&' + this.pokeLimit);
  }

  getPokeName(name: string): Observable<PokeURL> {
    return this.http.get<PokeURL>(this.pokeApi + name);
  }

  getPokeSpecies(name: string): Observable<PokeSpecies> {
    return this.http.get<PokeSpecies>(this.pokeSpecies + name);
  }

  getPokePage(num: number): Observable<PokemonApi> {
    this.pokePage = ((num - 1) * 35);
    return this.http.get<PokemonApi>(this.pokeApi + '?offset=' + this.pokePage + '&' + this.pokeLimit);
  }
}
