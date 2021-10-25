import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFilmsComponent } from './list-films/list-films.component';
import { ItemFilmComponent } from './list-films/item-film/item-film.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsFilmComponent } from './list-films/item-film/details-film/details-film.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFilmsComponent,
    ItemFilmComponent,
    HomeComponent,
    NavbarComponent,
    DetailsFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
