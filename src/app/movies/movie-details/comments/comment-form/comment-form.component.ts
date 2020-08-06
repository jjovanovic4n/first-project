import {Comment} from '../model/comment';
import { MovieService } from './../../../movie-list/services/movie.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mov-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  comment: Comment;
  @Output() addComment = new EventEmitter();

  constructor(private cardService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.comment = new Comment();
  }

  newComment() {
    this.comment.movies = parseInt(this.route.snapshot.paramMap.get("id"));
    this.comment.date = (new Date).toISOString();
    this.cardService.saveComment(this.comment).subscribe(res => {
      this.comment = new Comment();
      this.addComment.emit(res);
    });
  }

}
