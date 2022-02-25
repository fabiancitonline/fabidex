import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}
    obtenerPokemon(index?: number) {
      if (index) {
      return this.http.get(`${this.baseUrl}pokemon/${index}`);
    } else{
      return this.http.get(`${this.baseUrl}pokemon/`);
    }
  }
}
