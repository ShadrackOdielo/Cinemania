import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Import DomSanitizer
// Define the MovieDetail interface outside  the component
interface MovieDetail {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  videos : { results : { key : string }[] };
  overview : string;
  vote_average : number;

  // You may want to convert this to a Date object if needed
  // Add other movie detail properties here (e.g., rating, synopsis, trailer, etc.)
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  // movie: MovieDetail ; // Use the MovieDetail interface
   movie: MovieDetail = { id: 0, title: '', poster_path: '', release_date: '', videos : { results : [{ key : '' }] }, overview : '', vote_average : 0,  }; // Use the MovieDetail interface
  trailerUrl: SafeResourceUrl | undefined; // Initialize trailerUrl as SafeResourceUrl
  constructor(private route: ActivatedRoute,
              private movieService: MovieService,
              private sanitizer : DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const movieId = +params['id'];
      this.movieService.getMovieDetails(movieId).subscribe((data) => {
        this.movie = data as MovieDetail; // Cast the data to MovieDetail
        this.loadTrailerUrl();
      });
    });
  }
  loadTrailerUrl(): void {
    // Check if there are videos and if the first video has a key
    if (
        this.movie &&
        this.movie.videos &&
        this.movie.videos.results.length > 0 &&
        this.movie.videos.results[0].key
    ) {
      const videoKey = this.movie.videos.results[0].key;
      const youtubeUrl = `https://www.youtube.com/embed/${videoKey}`;
      this.trailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          youtubeUrl
      );
    }
  }
}
