import {Comment} from '../../movie-details/comments/model/comment';
import { MovieList } from './../model/movie-list';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Genre } from '../model/genre';
import { Movie } from '../model/movie';
import { CommentList } from '../../movie-details/comments/model/comment-list';


const URL: string = "http://localhost:3000/api/movies";
const URL_GENRES: string = "http://localhost:3000/api/genres";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  getAllMovies(parameters?: any): Observable<MovieList> {
    let queryParams = {};
    if (parameters) {
      queryParams = {
        params: new HttpParams()
        .set("page", parameters.page && parameters.page.toString() || "")
        .set("pageSize", parameters.pageSize && parameters.pageSize.toString() || "")
        .set("sort", parameters.sort && parameters.sort.toString() || "")
        .set("sortDirection", parameters.sortDirection && parameters.sortDirection.toString() || "")
      }
    }
    return this.http.get(URL, queryParams).pipe(map(data => {
      return new MovieList(data);
    }));
  }
  getGenres(): Observable<Genre[]> {
    return this.http.get<Array<Genre>>(URL_GENRES).pipe(map(data => {
      let genres = new Array<Genre>();
      data.forEach(elem => genres.push(new Genre(elem)));
      return genres;
    }));
  }
  getMovie(id:number): Observable<Movie> {
    return this.http.get<Movie>(URL + "/" + id).pipe(map(res => {
      return new Movie(res);
    }));
  }
  updateMovies(movie:Movie): Observable<Movie> {
    return this.http.put<Movie>(URL + "/" + movie._id, movie).pipe(map(res => {
      return new Movie(res);
    }));
  }
  
  addMovie(movie:Movie): Observable<Movie> {
    return this.http.post<Movie>(URL , movie).pipe(map(res => {
      return new Movie(res);
    }));
  }
  addGenre(newGenre: Genre): Observable<Genre> {
    return this.http.post(URL_GENRES, newGenre).pipe(map(data => {
      return new Genre(data);
    }));
  }
  getComments(id: number): Observable<CommentList> {
    return this.http.get<CommentList>(URL + "/" + id + "/comments").pipe(map(res => {
      return new CommentList(res);
    }));
  }

  saveComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(URL + "/" + comment.movies + "/comments", comment).pipe(map(res => {
      return new Comment(res);
    }));
  }


}
