import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsFilmComponent } from './list-films/item-film/details-film/details-film.component';
import { ListFilmsComponent } from './list-films/list-films.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: ListFilmsComponent},
  {path: 'detail/:id', component: DetailsFilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
