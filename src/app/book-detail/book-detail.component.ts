// book-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service'; // Import the BookService

interface Book {
  key: string;
  title: string;
  author_name: string[];
  cover_i: number;
  first_publish_year: number;
  publisher: string[];
  language: string[];
}

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book: Book | null = null;
  isLoading = true;

  constructor(
      private route: ActivatedRoute,
      private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const bookKey = params['key'];
      if (bookKey) {
        this.loadBookDetails(bookKey);
      }
    });
  }

  loadBookDetails(key: string): void {
    this.isLoading = true;
    this.bookService.getBookDetails(key).subscribe({
      next: (data: Book) => {
        this.book = data;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error fetching book details:', error);
        this.isLoading = false;
      },
    });
  }
}
