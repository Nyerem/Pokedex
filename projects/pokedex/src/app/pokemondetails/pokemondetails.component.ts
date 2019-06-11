import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from '../pokemon-service.service';
import { PokeURL, Type } from '../pokemon.model';
import { PokeSpecies, FlavorTextEntry } from '../pokemon.species';

@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrls: ['./pokemondetails.component.css']
})
export class PokemondetailsComponent implements OnInit {
  name: string;
  pokemonImg: string;
  pokeStats: PokeURL;
  pokeSpecies: PokeSpecies;
  pokeDesc: string;
  pokeType: Type[];
  constructor(
    private route: ActivatedRoute,
    private pokeDetails: PokemonServiceService
  ) { }

  ngOnInit() {
    this.getPokemonDetails();
  }

  getPokemonDetails() {
    this.name = this.route.snapshot.paramMap.get('name');
    this.getPokeStats();
    this.getPokeSpecies();

  }
  getPokeStats() {
    this.pokeDetails.getPokeName(this.name).subscribe(pokemon => {
      this.pokemonImg = pokemon.sprites.front_default;
      this.pokeStats = pokemon;
      this.pokeType = pokemon.types;
  }); }

  getPokeSpecies() {
    this.pokeDetails.getPokeSpecies(this.name).subscribe(pokemon => this.pokeDesc = pokemon.flavor_text_entries[9].flavor_text);
  }
}
