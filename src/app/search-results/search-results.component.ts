// search-results.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  movies: any[] = [];
  tvShows: any[] = [];
  books: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      const query = params.get('q');
      if (query) {
        this.search(query);
      }
    });
  }

  search(query: string): void {
    // Implement API calls for movies, TV shows, and books using ApiService
    this.apiService.searchMovies(query).subscribe((data: any) => {
      this.movies = data.results;
    });

    this.apiService.searchTVShows(query).subscribe((data: any) => {
      this.tvShows = data.results;
    });

    this.apiService.searchBooks(query).subscribe((data: any) => {
      this.books = data.items;
    });
  }
}
