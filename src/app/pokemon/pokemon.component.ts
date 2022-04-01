import { Component } from '@angular/core';
import { PokemonResponse } from './pokemon.interface';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  template: `{{selectedPokemon.species.name}} <div><img [src]="selectedPokemon.sprites.front_default"/></div>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class PokemonComponent {
  constructor(public pokemonService: PokemonService) {}

  starterPokemon = ['Charmander', 'Bulbasaur', 'Squirtle'];
  speciesData = [];
  selectedPokemon;

  ngOnInit() {
    for (let i = 0; i < this.starterPokemon.length; i++) {
      this.pokemonService
        .getPokemon(this.starterPokemon[i])
        .subscribe((res: PokemonResponse) => {
          this.speciesData.push(res);
          console.log('check' + this.speciesData);
        });
    }
  }
}
