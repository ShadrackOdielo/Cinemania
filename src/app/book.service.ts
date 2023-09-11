import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://openlibrary.org';

  constructor(private http: HttpClient) {}

  // Fetch a list of popular books
  getPopularBooks(): Observable<any> {
    const url = `${this.apiUrl}/subjects/best_sellers.json?limit=10`; // Adjust the limit as needed
    return this.http.get(url);
  }

  // Search for books by title
  searchBooksByTitle(query: string): Observable<any> {
    const url = `${this.apiUrl}/search.json?q=${query}`;
    return this.http.get(url);
  }
  // get a book by its key
    getBookDetails(key: string): Observable<any> {
    const url = `${this.apiUrl}${key}.json`;
    return this.http.get(url);
    }
}
