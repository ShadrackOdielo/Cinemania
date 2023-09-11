import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../tv-show.service';
import { SearchService } from '../search.service'; // Import the SearchService
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute to access query params

interface TvShow {
  id: number;
  name: string;
  first_air_date: Date;
  poster_path: string;
  image: { medium: string };
  status: string;
  weight: number;
  rating: { average: number };
}

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv_shows.component.html',
  styleUrls: ['./tv_shows.component.css'],
})
export class TvShowsComponent implements OnInit {
  tvShows: TvShow[] = [];
  isLoading = true;
  selectedFilter = 'popular'; // Default filter
  searchQuery: string = ''; // Initialize search query

  constructor(
      private tvShowService: TvShowService,
      private searchService: SearchService, // Inject the SearchService
      private router: Router,
      private route: ActivatedRoute // Inject ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      // Update the searchQuery when query parameters change
      this.searchQuery = queryParams['query'] || '';
      console.log(this.searchQuery);
      if (this.searchQuery) {
        this.performSearch(); // Perform search when query is available
      } else {
        this.loadTvShows(); // Load TV shows if no search query
      }
    });
  }

  loadTvShows(): void {
    this.isLoading = true;
    this.tvShowService.getTvShows().subscribe({
      next: (data: TvShow[]) => {
        this.tvShows = data;
        this.isLoading = false;
        this.filterTvShows(); // Filter TV shows initially
      },
      error: (error: any) => {
        console.error('Error fetching TV shows:', error);
        this.isLoading = false;
      },
    });
  }

  performSearch(): void {
    if (this.searchQuery) {
      this.isLoading = true;
      this.searchService.searchShows(this.searchQuery).subscribe({
        next: (data: any[]) => {
          this.tvShows = data.map((item: any) => item.show);
          console.log('Search results data:', data)
          console.log('Search results:', this.tvShows)

          this.isLoading = false;
          this.filterTvShows(); // Filter TV shows after search
        },
        error: (error: any) => {
          console.error('Error searching for shows:', error);
          this.isLoading = false;
        },
      });
    }
  }

  filterTvShows(): void {
    // Implement filtering logic based on selectedFilter
    if (this.selectedFilter === 'popular') {
      this.tvShows = this.tvShows.sort((a, b) => b.weight - a.weight);
    } else if (this.selectedFilter === 'ongoing') {
      this.tvShows = this.tvShows.filter((show) => show.status === 'Running');
    } else if (this.selectedFilter === 'top-rated') {
      this.tvShows = this.tvShows.sort((a, b) => b.rating.average - a.rating.average);
    }
  }

  goToTvShowDetail(tvShowId: number): void {
    this.router.navigate(['/tv_shows', tvShowId]).then(() =>
        console.log('Navigated to TV show detail')
    );
  }
}
