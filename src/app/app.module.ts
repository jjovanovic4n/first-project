import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './core/about/about.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieComponent } from './movies/movie-list/movie/movie.component';
import { PaginationComponent } from './movies/movie-list/pagination/pagination.component';
import { SortComponent } from './movies/movie-list/sort/sort.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { EditComponent } from './movies/movie-details/edit/edit.component';
import { CommentsComponent } from './movies/movie-details/comments/comments.component';
import { CommentComponent } from './movies/movie-details/comments/comment/comment.component';
import { CommentFormComponent } from './movies/movie-details/comments/comment-form/comment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowMoreComponent } from './movies/movie-details/show-more/show-more.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    MovieListComponent,
    MovieComponent,
    PaginationComponent,
    SortComponent,
    MovieDetailsComponent,
    EditComponent,
    CommentsComponent,
    CommentComponent,
    CommentFormComponent,
    ShowMoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
