import { Component, OnInit} from '@angular/core';
import { Movie } from '../../movie-list/model/movie';
import { Genre } from '../../movie-list/model/genre';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../../movie-list/services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mov-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  movie:Movie;
  genres:Genre[];
  movieForm:FormGroup;
  genreClicked: boolean = false;
  newGenre: string;
  editMovie: boolean = false;
  
  
    constructor(private service:MovieService,private fb:FormBuilder, private route:ActivatedRoute, private router:Router) {
      this.createForm();
     }
  
    ngOnInit(): void {
      let id: string = this.route.snapshot.params.id;
      if (id) {
        this.editMovie = true;
        this.service.getMovie(Number(id)).subscribe(data => {
          this.movie = data;
          this.movieForm.patchValue(this.movie);
        });  
      }
      this.service.getGenres().subscribe(data => {
        this.genres = data;
      });
      }
      onSubmit() {
        let submittedMovie: Movie = new Movie(this.movieForm.value);
        if (this.movie && this.movie._id) {
          console.log(this.movie._id);
          submittedMovie._id = this.movie._id;
          this.service.updateMovies(submittedMovie).subscribe(data => {
          });
          console.log("update");
          console.log(submittedMovie);
        } else {
          this.service.addMovie(submittedMovie).subscribe(data => {
          });
          console.log("add");
          console.log(submittedMovie);
        }
        this.movieForm.reset();
        this.router.navigate(['movies']);
      }
      createForm(){
        this.movieForm = this.fb.group({
          'name': ["", Validators.required],
          'description': ["", [Validators.required,Validators.minLength(10),Validators.maxLength(650)]],
          'director': ["", Validators.required],
          'genre': ["", Validators.required],
          'year':  ["", [Validators.required,Validators.minLength(4),Validators.maxLength(4)]],
          'rating': ["", Validators.maxLength(100)],
          'duration': ["", Validators.required]
          });
      }
      openGenreForm() {
        this.genreClicked = !this.genreClicked;
      }
    
      submitGenre() {
        let submittedGenre: Genre = new Genre();
        submittedGenre._id = this.genres.length + 1;
        submittedGenre.name = this.newGenre;
        this.service.addGenre(submittedGenre).subscribe(data => {
          this.newGenre = "";
          this.genreClicked = false;
          this.genres.push(data);
          this.movieForm.patchValue({
            genre: submittedGenre.name
          });
        });
        
      }
    
    
   
  }
  
