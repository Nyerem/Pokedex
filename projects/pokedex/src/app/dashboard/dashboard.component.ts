import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from '../pokemon-service.service';
import { PokeResult } from '../pokemon.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pokemon: PokeResult[];
  pokepage: number;
  constructor(
    private pokemonService: PokemonServiceService,
    private route: ActivatedRoute 
    ) { }

  ngOnInit() {

    this.route.params.subscribe(pokemon => {
      this.pokepage = pokemon.name;
      this.pokemonService.getPokePage(this.pokepage).subscribe(pokemon1 => this.pokemon = pokemon1.results);
  }); }

}
