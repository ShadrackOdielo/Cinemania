import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {
  private apiUrl = 'https://api.tvmaze.com';

  constructor(private http: HttpClient) {}

  getTvShows(filter: string = 'popular'): Observable<any[]> {
    const url = `${this.apiUrl}/shows`;
    const params = new HttpParams().set('filter', filter);

    return this.http.get<any[]>(url, { params });
  }

  getTvShowDetails(tvShowId: number): Observable<any> {
    const url = `${this.apiUrl}/shows/${tvShowId}`;
    return this.http.get<any>(url);
  }
}
