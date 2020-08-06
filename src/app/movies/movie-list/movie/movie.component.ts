import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'mov-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;
  movieTop:boolean = false;
  constructor(private service: MovieService) { }

  ngOnInit(): void {
    this.defineTop();
  }
  
  defineTop() {
    if(this.movie.rating >= 85) {
      this.movieTop = true;
    }
  }

}
