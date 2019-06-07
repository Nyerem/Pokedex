import { Component, OnInit, Input } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import { Species } from '../pokemon.model';

@Component({
  selector: 'app-pokemonpictures',
  templateUrl: './pokemonpictures.component.html',
  styleUrls: ['./pokemonpictures.component.css']
})
export class PokemonpicturesComponent implements OnInit {
// tslint:disable-next-line: no-input-rename
@Input('name') pokeName: string;
pokemonImg: string ;
pokesName: string;
  constructor(private pokeDetails: PokemonServiceService) { }

  ngOnInit() {
    if (this.pokeName) {
      this.getPokePic();
      this.getPokeName();
   }
  }

  getPokePic() {
    this.pokeDetails.getPokeName(this.pokeName).subscribe(pokemonImg => this.pokemonImg = pokemonImg.sprites.front_default);
  }

  getPokeName() {
    this.pokeDetails.getPokeName(this.pokeName).subscribe(pokeName => this.pokesName = pokeName.species.name);
  }
}
