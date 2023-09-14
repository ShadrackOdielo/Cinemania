import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Import DomSanitizer


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {TvShowsComponent } from './tvshows/tv_shows.component';
import { BooksComponent } from './books/books.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TvShowDetailComponent } from './tv-show-detail/tv-show-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SearchResultsComponent } from './search-results/search-results.component';



@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvShowsComponent,
    BooksComponent,
    UserProfileComponent,
    NavigationMenuComponent,
    HomeComponent,
    MovieDetailComponent,
    TvShowDetailComponent,
    SearchComponent,
    BookDetailComponent,
    LandingPageComponent,
    SearchComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
