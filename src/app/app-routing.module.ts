import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './movies/movie-details/edit/edit.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { CommentsComponent } from './movies/movie-details/comments/comments.component';



const routes: Routes = [
  { path: "home", component:  MovieListComponent},
  { path: 'movies', component: MovieListComponent},
  { path: 'movies/:id', component:  MovieDetailsComponent},
  { path: 'movies/:id/comments', component: CommentsComponent},
  { path: 'edit', component:  EditComponent},
  { path: 'edit/:id', component:  EditComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
