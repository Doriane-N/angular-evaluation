import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Film } from 'src/app/interfaces/film';

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.scss']
})
export class DetailsFilmComponent implements OnInit {

  title: string = "Movie details"

  film: Film | undefined;
  filmId: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.filmId = this.route.snapshot.paramMap.get('id');
    if (this.filmId) {
      this.apiService.getFilm(Number(this.filmId)).subscribe(resultFromAPI => {
        this.film = resultFromAPI;
      });
    };
  }
  
}
