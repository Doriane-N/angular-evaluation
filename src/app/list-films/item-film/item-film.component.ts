import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Film } from 'src/app/interfaces/film';

@Component({
  selector: 'app-item-film',
  templateUrl: './item-film.component.html',
  styleUrls: ['./item-film.component.scss']
})

export class ItemFilmComponent implements OnInit {

  @Input() film: Film | undefined;
  @Output() increaseScoreItemEvent = new EventEmitter<Film>();
  @Output() decreaseScoreItemEvent = new EventEmitter<Film>();

  constructor() { }

  increaseScore() {
    if(this.film) {
      this.film.score ++;
      this.increaseScoreItemEvent.emit(this.film);
    }
  }

  decreaseScore()  {
    if(this.film && this.film.score > 0) {
      this.film.score --;
      this.decreaseScoreItemEvent.emit(this.film);
    }
  }

  ngOnInit(): void {
  }

}
