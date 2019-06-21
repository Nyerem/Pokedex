import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from '../pokemon-service.service';
import { PokeURL, Type, Stat, Ability } from '../pokemon.model';
import { PokeSpecies, FlavorTextEntry, Genera } from '../pokemon.species';

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
  pokeDesc: string[] = [];
  pokeGenera: string[] = [];
  pokeAbility: string[] = [];
  pokeType: Type[];
  pokeStat: Stat[];
  pokeName2: string;
  pokeName: string;
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

  }
  getPokeStats() {
    this.pokeDetails.getPokeName(this.name).subscribe(pokemon => {
      this.pokemonImg = pokemon.sprites.front_default;
      this.pokeStats = pokemon;
      this.pokeType = pokemon.types;
      this.pokeName = pokemon.name;
      this.pokeStat = pokemon.stats.sort((a, b) => (a.stat.name > a.stat.name) ? 1 : -1);
      pokemon.abilities.forEach((ability: Ability) => {
        // tslint:disable-next-line:no-conditional-assignment
        if (!ability.is_hidden) {
          this.pokeAbility.push(ability.ability.name);
        }});
      console.log(this.pokeAbility);
      this.pokeName2 = pokemon.species.name;
      this.getPokeSpecies();
  }); }

  getPokeSpecies() {
    this.pokeDetails.getPokeSpecies(this.pokeName2).subscribe(pokemon => {
      pokemon.flavor_text_entries.forEach((text: FlavorTextEntry) => {
        if (text.language.name === 'en') {
          this.pokeDesc.push(text.flavor_text);
        }});
      pokemon.genera.forEach((genera: Genera) => {
        if (genera.language.name === 'en') {
          this.pokeGenera.push(genera.genus);
          }});

    }); }
}
