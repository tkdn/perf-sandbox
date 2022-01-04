import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsWithCssComponent } from './pokemons-with-css.component';

describe('PokemonsWithCssComponent', () => {
  let component: PokemonsWithCssComponent;
  let fixture: ComponentFixture<PokemonsWithCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsWithCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsWithCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
