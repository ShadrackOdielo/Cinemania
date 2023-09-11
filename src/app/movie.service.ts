import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '7a807bb1c3ae1c9ed784142e8aa26a61';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    const url = `${this.apiUrl}/discover/movie`;
    const params = {
      api_key: this.apiKey,
      language: 'en-US',
    };

    return this.http.get(url, { params });
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}`;
    const params = {
      api_key: this.apiKey,
      language: 'en-US',
    };

    return this.http.get(url, { params });
  }
}
