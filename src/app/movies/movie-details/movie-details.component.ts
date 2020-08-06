import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie-list/services/movie.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie-list/model/movie';


@Component({
  selector: 'mov-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})

export class MovieDetailsComponent implements OnInit {
  movie:Movie;
  showBtn: boolean = false;
  constructor(private service:MovieService,private fb:FormBuilder, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id: string = this.route.snapshot.params.id;
    if (id) {
      this.service.getMovie(Number(id)).subscribe(data => {
       
        this.movie = data;
      });
    }
  }
  showVoteBtn() {
    this.showBtn = !this.showBtn;
  }
  update(movie: Movie) {
    this.service.updateMovies(movie).subscribe(res => this.movie = res);
    this.router.navigate(['movies']); 
  }
  
  vote(rating:number) {
    let tempMovie = new Movie(this.movie);
    if(rating < 100) {
      tempMovie.rating = rating;
      this.update(tempMovie); 

    } else if(rating = 100){
      alert("Max rating");
      this.update(tempMovie);
    }
  }
  
  

}
