import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedetailComponent } from './components/pokedetail/pokedetail.component';
import { PoketableComponent } from './components/poketable/poketable.component';

const routes: Routes = [
  {path: 'index', component: PoketableComponent},
  {path: 'pokedetail/:id', component: PokedetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: '**', pathMatch: 'full', redirectTo: 'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
