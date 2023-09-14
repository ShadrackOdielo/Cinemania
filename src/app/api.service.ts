import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private googleBooksApiUrl = 'https://www.googleapis.com/books/v1'; // Google Books API URL
  private tvmazeApiUrl = 'https://api.tvmaze.com'; // TVmaze API URL
  private tmdbApiUrl = 'https://api.themoviedb.org/3'; // TMDb API URL
  private tmdbApiKey = '7a807bb1c3ae1c9ed784142e8aa26a61' ; // Replace with your TMDb API key

  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<any> {
    const url = `${this.googleBooksApiUrl}/volumes?q=${query}`;
    return this.http.get(url);
  }

  searchTVShows(query: string): Observable<any> {
    const url = `${this.tvmazeApiUrl}/search/shows?q=${query}`;
    return this.http.get(url);
  }

  searchMovies(query: string): Observable<any> {
    const url = `${this.tmdbApiUrl}/search/multi?api_key=${this.tmdbApiKey}&query=${query}`;
    return this.http.get(url);
  }

  getFeaturedMovies(): Observable<any[]> {
    const apiKey = this.tmdbApiKey; // Replace with your TMDB API key
    const url = `${this.tmdbApiUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    return this.http.get<any[]>(url);
  }

  getFeaturedBooks(): Observable<any[]> {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:Stephen+King&maxResults=5'; // Replace with your Google Books API query
    return this.http.get<any[]>(url);
  }

  getFeaturedTVShows(): Observable<any[]> {
    const url = `https://api.tvmaze.com/shows?page=1&per_page=5`;
    return this.http.get<any[]>(url);
  }
}
