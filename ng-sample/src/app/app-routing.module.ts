import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsWithCssComponent } from './component/pokemons-with-css/pokemons-with-css.component';
import { PokemonsWithInlineStyleComponent } from './component/pokemons-with-inline-style/pokemons-with-inline-style.component';

const routes: Routes = [
  {
    path: 'pokemons-with-css',
    component: PokemonsWithCssComponent,
  },
  {
    path: 'pokemons-with-inline-style',
    component: PokemonsWithInlineStyleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
