import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

// Define the Movie interface outside  the component
interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string; // You may want to convert this to a Date object if needed
    // Add other movie properties here
}

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
    movies: Movie[] = [];
    isLoading = true;

    constructor(private movieService: MovieService) {}

    ngOnInit(): void {
        this.movieService.getMovies().subscribe({
            next: (data: any) => {
                this.movies = data.results.map((movie: any) => ({
                    id: movie.id,
                    title: movie.title,
                    poster_path: movie.poster_path,
                    release_date: movie.release_date,
                    // Map other movie properties here
                }));
                this.isLoading = false;
            },
            error: (error: any) => {
                console.error('Error fetching movies:', error);
                this.isLoading = false;
            },
        });
    }
}
