import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../movie-list/services/movie.service';
import { Movie } from '../../movie-list/model/movie';

@Component({
  selector: 'mov-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss']
})
export class TopMoviesComponent implements OnInit {
  topMovies: Array<Movie> =  [];
  constructor(private service:MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  getMovies() {
      this.service.getAllMovies().subscribe(data => {
        for(let i = 0; i <data.results.length; i++) {  
          if(data.results[i].rating >= 85) {
            this.topMovies.push(data.results[i]); 
          }
        }
      }
  )};
}
