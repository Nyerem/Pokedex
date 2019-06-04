import { Component, OnInit, Input } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import { PokeURL, PokeSprite } from '../pokemon.model';

@Component({
  selector: 'app-pokemonpictures',
  templateUrl: './pokemonpictures.component.html',
  styleUrls: ['./pokemonpictures.component.css']
})
export class PokemonpicturesComponent implements OnInit {
// tslint:disable-next-line: no-input-rename
@Input('name') pokeName: string;
pokemonImg: PokeSprite;
  constructor(private pokemonName: PokemonServiceService) { }

  ngOnInit() {
    if (this.pokeName) {
      this.pokemonName.getPokeName(this.pokeName).subscribe(pokemon => this.pokemonImg = pokemon.sprites);
    }
  }
}
