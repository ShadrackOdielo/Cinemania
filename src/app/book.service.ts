import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  // Fetch a list of popular books
  getPopularBooks(): Observable<any> {
    const params = new HttpParams().set('q', 'subject:fiction').set('orderBy', 'newest').set('maxResults', '25');
    return this.http.get(this.apiUrl, { params });
  }

  // Search for books by title or author
  searchBooks(query: string): Observable<any> {
    const params = new HttpParams().set('q', query).set('maxResults', '10');
    return this.http.get(this.apiUrl, { params });
  }

  // Get book details by its ID
  getBookDetails(bookId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${bookId}`);
  }
}
