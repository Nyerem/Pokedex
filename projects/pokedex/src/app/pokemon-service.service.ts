import { Injectable, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonApi, Result } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService implements OnInit {
  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon';
  ngOnInit() {
    console.log();
  }
  constructor(private http: HttpClient) { }

  getPokemon() {
    return this.http.get<PokemonApi>(this.pokeUrl);
  }

}
