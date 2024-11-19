import { Component, computed, inject, signal } from '@angular/core';
//import { POKEMON_LIST } from './pokemon-list.fake';
import { Pokemon } from './pokemon.model';
import { PokemonBorderDirective } from './pokemon-border.directive';
import { DatePipe } from '@angular/common';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonBorderDirective, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [PokemonService],
})
export class AppComponent {
  // name = signal('Pikachu');
  // life = signal(21);
  // imageSrc = signal('https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png');
  // size = computed(() => {
  //   if (this.life() <= 15) {
  //     return 'Petit';
  //   }

  //   if (this.life() >= 25) {
  //     return 'Grand';
  //   }

  //   return 'Moyen';
  // });

  // incrementLife() {
  //   this.life.update(n => n + 1);
  // }

  // decrementLife() {
  //   this.life.update(n => n - 1);
  // }

  private readonly pokemonService = inject(PokemonService);

  readonly searchTerm = signal('');

  pokemonList = signal(this.pokemonService.getPokemonList());

  readonly pokemonListFiltered = computed(() => {
    return this.pokemonList().filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(this.searchTerm().trim().toLowerCase())
    );
  });

  incrementLife(pokemon: Pokemon) {
    pokemon.life = pokemon.life + 1;
  }

  decrementLife(pokemon: Pokemon) {
    pokemon.life = pokemon.life - 1;
  }

  size(pokemon: Pokemon) {
    if (pokemon.life <= 15) {
      return 'Petit';
    }
    if (pokemon.life >= 25) {
      return 'Grand';
    }

    return 'Moyen';
  }


}
