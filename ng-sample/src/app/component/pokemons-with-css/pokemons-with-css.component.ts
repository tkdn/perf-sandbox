import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemons-with-css',
  templateUrl: './pokemons-with-css.component.html',
  styleUrls: ['./pokemons-with-css.component.css'],
})
export class PokemonsWithCssComponent implements OnInit {
  pokemonList$: Observable<{ data: { pokemons: Pokemon[] } }> | undefined =
    undefined;

  constructor(private pokemons: PokemonService) {}

  ngOnInit(): void {
    this.pokemonList$ = this.pokemons.getList(9);
  }
}
