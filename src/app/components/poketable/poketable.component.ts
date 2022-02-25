import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-poketable',
  templateUrl: './poketable.component.html',
  styleUrls: ['./poketable.component.scss']
})
export class PoketableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any = [] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  pokemons = [];
  pokemonData: any;
  cant: number;

  constructor(private pokeService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerPokemon()
  }
obtenerPokemon() {
  for (let i = 1; i < 891; i++) {
    this.pokeService.obtenerPokemon(i).subscribe(
        (res: any) => {
          this.pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name.charAt(0).toUpperCase() + res.name.slice(1)
          };
        this.data.push(this.pokemonData);
        this.dataSource = new MatTableDataSource<any>(this.data);
        this.dataSource.paginator = this.paginator;
      },
      err => {
        console.log(err);
      }
    );
  }
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getPokemon(row: any){
    this.router.navigateByUrl(`pokedetail/${row.position}`);
  }
}
