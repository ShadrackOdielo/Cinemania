import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import {TvShowsComponent } from './tvshows/tv_shows.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksComponent } from './books/books.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  { path: '' ,component: LandingPageComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: 'tv_shows', component: TvShowsComponent },
  { path: 'tv_shows/:id', component: TvShowDetailComponent },
  { path: 'tv_shows/search', component: TvShowsComponent },
  { path: 'tv_shows/popular', component: TvShowsComponent, data: { filter: 'popular' } },
  { path: 'tv_shows/ongoing', component: TvShowsComponent, data: { filter: 'ongoing' } },
  { path: 'tv_shows/top_rated', component: TvShowsComponent, data: { filter: 'top_rated' } },
  { path: 'books', component: BooksComponent },
  {path: 'books/:id', component: BookDetailComponent},
  { path: 'profile', component: UserProfileComponent },
  { path: 'home', component: HomeComponent },
  {path: 'search',component: SearchResultsComponent}
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
