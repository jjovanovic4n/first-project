import { Movie } from './../../movie-list/model/movie';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie-list/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { CommentList } from './model/comment-list';

@Component({
  selector: 'mov-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: CommentList;
  movie: Movie;

  constructor(private service: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.service.getComments(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(
        res => this.comments = res
      );
      this.service.getMovie(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(
        res => this.movie = res
      );
    });
  }

  addComment(comment) {
    this.comments.results.push(comment);
    this.comments.count += 1;
  }

}
