import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';
import { MovieList } from './model/movie-list';
import { Movie } from './model/movie';

@Component({
  selector: 'mov-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: MovieList;
  parameters = {
    page: 1,
    pageSize: 8,
    sort: "rating",
    sortDirection: "desc"
  };
  selectedMovie: any;
  constructor(private service:MovieService) { }

  ngOnInit(): void {
    
   this.updateMovies();
  }
  
  updateMovies(params?: any) {
    if(params) {
      this.parameters.pageSize = params.pageSize || this.parameters.pageSize;
      this.parameters.page = params.page || this.parameters.page;
    }
    this.service.getAllMovies(this.parameters).subscribe(data => {
      this.movies = data;
    });
  }
  updateSort(params: any) {
    this.parameters.sort = params.sort;
    this.parameters.sortDirection = params.sortDirection;
    this.updateMovies();
  }
  onSelect(select): void {
    this.selectedMovie = select;
  }

}
