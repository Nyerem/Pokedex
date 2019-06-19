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
pokemonImg: string;
pokesName: Species;
  constructor(private pokeDetails: PokemonServiceService) { }

  ngOnInit() {
      this.getPokePic();
  }

  getPokePic() {
    this.pokeDetails.getPokeName(this.pokeName).subscribe(pokemonImg => {
      this.pokemonImg = pokemonImg.sprites.front_default;
      this.pokesName = pokemonImg.species;
    });
  }


}
