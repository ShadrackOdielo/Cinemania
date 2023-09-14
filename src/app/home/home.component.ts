// home.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface Book {
  id: string;
  title: string;
  cover: string;
}

interface TVShow {
  id: number;
  name: string;
  image: { medium: string };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredMovies: Movie[] = [];
  featuredBooks: Book[] = [];
  featuredTVShows: TVShow[] = [];

  currentMovieIndex: number = 0;
  currentBookIndex: number = 0;
  currentTVShowIndex: number = 0;
  query : string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadFeaturedContent();
  }

  loadFeaturedContent(): void {
    // Fetch featured movies
    this.apiService.getFeaturedMovies().subscribe((movies: any) => {
      this.featuredMovies = movies.results;
    });

    // Fetch featured books
    this.apiService.getFeaturedBooks().subscribe((books: any) => {
      const bookItems = books.items || [];
      this.featuredBooks = bookItems.map((item: any) => ({
        id: item.id,
        title: item.volumeInfo.title,
        cover: item.volumeInfo.imageLinks?.thumbnail || '',
      }));
    });

    // Fetch featured TV shows
    this.apiService.getFeaturedTVShows().subscribe((tvShows: TVShow[]) => {
      this.featuredTVShows = tvShows;
    });
  }
  // Function to navigate to the previous featured movie
  prevMovie(): void {
    if (this.currentMovieIndex > 0) {
      this.currentMovieIndex--;
    } else {
      // If at the beginning, loop to the last movie
      this.currentMovieIndex = this.featuredMovies.length - 1;
    }
  }

  // Function to navigate to the next featured movie
  nextMovie(): void {
    if (this.currentMovieIndex < this.featuredMovies.length - 1) {
      this.currentMovieIndex++;
    } else {
      // If at the end, loop to the first movie
      this.currentMovieIndex = 0;
    }
  }

  // Function to navigate to the previous featured book
  prevBook(): void {
    if (this.currentBookIndex > 0) {
      this.currentBookIndex--;
    } else {
      // If at the beginning, loop to the last book
      this.currentBookIndex = this.featuredBooks.length - 1;
    }
  }

  // Function to navigate to the next featured book
  nextBook(): void {
    if (this.currentBookIndex < this.featuredBooks.length - 1) {
      this.currentBookIndex++;
    } else {
      // If at the end, loop to the first book
      this.currentBookIndex = 0;
    }
  }

  // Function to navigate to the previous featured TV show
  prevTVShow(): void {
    if (this.currentTVShowIndex > 0) {
      this.currentTVShowIndex--;
    } else {
      // If at the beginning, loop to the last TV show
      this.currentTVShowIndex = this.featuredTVShows.length - 1;
    }
  }

  // Function to navigate to the next featured TV show
  nextTVShow(): void {
    if (this.currentTVShowIndex < this.featuredTVShows.length - 1) {
      this.currentTVShowIndex++;
    } else {
      // If at the end, loop to the first TV show
      this.currentTVShowIndex = 0;
    }
  }

  // Function to perform a search and redirect to the search results route
  search(query: string): void {
    if (query.trim() !== '') {
      this.router.navigate(['/search'], { queryParams: { q: query } });
    }
  }
}

