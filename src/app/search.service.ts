import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) {}

  searchShows(query: string): Observable<any[]> {
    const url = `${this.apiUrl}/search/shows?q=${query}`;
    return this.http.get<any[]>(url);
  }
}
