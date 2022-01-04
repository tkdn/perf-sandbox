import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsWithInlineStyleComponent } from './pokemons-with-inline-style.component';

describe('PokemonsWithInlineStyleComponent', () => {
  let component: PokemonsWithInlineStyleComponent;
  let fixture: ComponentFixture<PokemonsWithInlineStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsWithInlineStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsWithInlineStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
