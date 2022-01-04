import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://graphql-pokemon2.vercel.app/';
const pokemonQuery = `
  query PokemonList($size: Int!) {
    pokemons(first: $size) {
      id
      number
      name
      image
      __typename
      attacks {
        __typename
        special {
          name
          type
          damage
          __typename
        }
      }
    }
  }
`;

export type Pokemon = {
  id: string;
  image: string;
  name: string;
  attacks: {
    special: Array<{
      name: string;
      type: string;
      damage: number;
    }>;
  };
};

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getList(size: number): Observable<{ data: { pokemons: Pokemon[] } }> {
    const requestBody = JSON.stringify({
      query: pokemonQuery,
      variables: { size },
    });
    return this.http.post<{ data: { pokemons: Pokemon[] } }>(
      API_ENDPOINT,
      requestBody,
      {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      }
    );
  }
}
