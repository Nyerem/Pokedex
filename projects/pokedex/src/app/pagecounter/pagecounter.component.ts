import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import { PokeResult } from '../pokemon.model';

@Component({
  selector: 'app-pagecounter',
  templateUrl: './pagecounter.component.html',
  styleUrls: ['./pagecounter.component.css']
})
export class PagecounterComponent implements OnInit {
pokePages: number[] = [];
pokePage: number;
pokemon: PokeResult[];
i: number;
  constructor(private pokemonService: PokemonServiceService ) { }

  ngOnInit() {
    this.getPokeURL();
  }

  getPokeURL() {
    this.pokemonService.getPokemon().subscribe(pokemon => {
      this.pokePage = Math.ceil(pokemon.count / 35);
      for (this.i = 1; this.i <= this.pokePage; this.i++) {
        this.pokePages.push(this.i);
      }
    });
  }

  onSelect(pokePagess: number) {
    this.pokemonService.getPokePage(pokePagess).subscribe(pokemonPage => {
      console.log('');
    });
  }
}
