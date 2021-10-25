import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from './interfaces/film';
import { environment } from 'src/environments/environment';

const HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(`${environment.serverURL}/movies`)
  }

  getFilm(id: number): Observable<Film> {
    return this.httpClient.get<Film>(`${environment.serverURL}/movies/${id}`);
  }

  updateFilm(film: Film): Observable<Film> {
    return this.httpClient.put<Film>(`${environment.serverURL}/movies/${film.id}`,
    {title: film.title, plot: film.plot, posterUrl: film.posterUrl, year: film.year, score: film.score});
  }

}
