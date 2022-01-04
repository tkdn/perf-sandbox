import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsWithCssComponent } from './component/pokemons-with-css/pokemons-with-css.component';
import { PokemonsWithInlineStyleComponent } from './component/pokemons-with-inline-style/pokemons-with-inline-style.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsWithCssComponent,
    PokemonsWithInlineStyleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
