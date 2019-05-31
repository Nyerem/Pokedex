import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from './pokemon-service.service';
import { Result } from './pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  pokemon: Result[];
  constructor(private pokemonService: PokemonServiceService ) {}
// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    return this.pokemonService.getPokemon()
      .subscribe(pokemons => this.pokemon = pokemons.results);
  }
}
