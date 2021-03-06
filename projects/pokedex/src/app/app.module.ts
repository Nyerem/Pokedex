import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonServiceService } from './pokemon-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonpicturesComponent } from './pokemonpictures/pokemonpictures.component';
import { PokeRoutingModule } from './poke-routing.module';
import { PokemondetailsComponent } from './pokemondetails/pokemondetails.component';
import { PagecounterComponent } from './pagecounter/pagecounter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PokemonpicturesComponent,
    PokemondetailsComponent,
    PagecounterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PokeRoutingModule
  ],
  providers: [PokemonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
