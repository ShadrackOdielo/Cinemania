// home.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredMovies: any[] = [];
  featuredBooks: any[] = [];
  featuredTVShows: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadFeaturedContent();
  }

  loadFeaturedContent(): void {
    // Fetch featured movies
    this.apiService.getFeaturedMovies().subscribe((movies: any[]) => {
      this.featuredMovies = movies;
      console.log("featured movies:",movies);
    });

    // Fetch featured books
    this.apiService.getFeaturedBooks().subscribe((books: any[]) => {
      this.featuredBooks = books;
      console.log("featured books", books);
    });

    // Fetch featured TV shows
    this.apiService.getFeaturedTVShows().subscribe((tvShows: any[]) => {
      this.featuredTVShows = tvShows;
      console.log("featuredtv:" ,tvShows);
    });
  }
}
