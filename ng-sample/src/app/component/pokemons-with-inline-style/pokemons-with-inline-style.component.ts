import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemons-with-inline-style',
  templateUrl: './pokemons-with-inline-style.component.html',
  styleUrls: ['./pokemons-with-inline-style.component.css'],
})
export class PokemonsWithInlineStyleComponent implements OnInit {
  pokemonList$: Observable<{ data: { pokemons: Pokemon[] } }> | undefined =
    undefined;

  constructor(private pokemons: PokemonService) {}

  ngOnInit(): void {
    this.pokemonList$ = this.pokemons.getList(9);
  }
}
