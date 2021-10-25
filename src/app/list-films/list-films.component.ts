import { Component, OnInit } from '@angular/core';
import { Film } from '../interfaces/film';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.scss']
})
export class ListFilmsComponent implements OnInit {

  titre: string = "Our movies";
  films: Film[] = [];

  constructor(private apiService: ApiService) { }

  updateFilm(filmToEdit: Film) {
    this.apiService
      .updateFilm(filmToEdit)
      .subscribe(FilmToEdit => {
        this.films = this.films.map(film =>
          film.id === filmToEdit.id ? FilmToEdit : film
        );
      });
  }

  ngOnInit(): void {
    this.apiService.getFilms().subscribe(resultFromAPI => this.films = resultFromAPI);
  }

}
