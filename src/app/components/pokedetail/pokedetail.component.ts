import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.scss'],
})
export class PokedetailComponent implements OnInit {
  pokemon: any;
  tipopokemon = [];
  pokemonimg = '';
  constructor(
    private pokemonService: PokemonService,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe((params) => {
      this.obtenerPokemon(params['id']);
    });
  }
  ngOnInit(): void {}
  obtenerPokemon(id: number) {
    this.pokemonService.obtenerPokemon(id).subscribe(
      (res: any) => {
        this.pokemon = res;
        this.pokemonimg = res.sprites.front_default;
        this.tipopokemon = res.types[0].type.name;
        this.pokemon.name = this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)

        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
