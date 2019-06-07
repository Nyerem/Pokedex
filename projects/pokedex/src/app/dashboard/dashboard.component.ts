import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import { PokeResult } from '../pokemon.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pokemon: PokeResult[];
  constructor(private pokemonService: PokemonServiceService ) { }

  ngOnInit() {
    this.getPokeURL();
  }

  getPokeURL() {
    this.pokemonService.getPokemon()
    .subscribe(pokemon => this.pokemon = pokemon.results);
  }

}
