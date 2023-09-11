import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: any[] = [];
  searchResults: any[] = [];
  searchQuery: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadPopularBooks();
  }

  loadPopularBooks(): void {
    this.bookService.getPopularBooks().subscribe((data: any) => {
      this.books = data.works;
    });
  }

  handleBookClick(book: any): void {
    // Handle book click, e.g., navigate to book details
    console.log('Book clicked:', book);
  }

  searchBookCovers(): void {
    if (this.searchQuery.trim() !== '') {
      this.bookService.searchBooksByTitle(this.searchQuery).subscribe((data: any) => {
        this.searchResults = data.docs;
      });
    } else {
      this.searchResults = [];
    }
  }
}
