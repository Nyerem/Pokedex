import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServiceService } from '../pokemon-service.service';
import { Sprites } from '../pokemon.model';

@Component({
  selector: 'app-pokemondetails',
  templateUrl: './pokemondetails.component.html',
  styleUrls: ['./pokemondetails.component.css']
})
export class PokemondetailsComponent implements OnInit {
  name: string;
  pokemonImg: Sprites;
  constructor(
    private route: ActivatedRoute,
    private pokeDetails: PokemonServiceService
  ) { }

  ngOnInit() {
    this.getPokemonDetails();
  }

  getPokemonDetails() {
    this.name = this.route.snapshot.paramMap.get('name');
// tslint:disable-next-line: align
    if (this.name) {
      this.getPokeName();
    }

  }
  getPokeName() {
    this.pokeDetails.getPokeName(this.name).subscribe(pokemon => this.pokemonImg = pokemon.sprites);
  }
}
