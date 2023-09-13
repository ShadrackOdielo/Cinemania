import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
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
      this.books = data.items;
    });
  }

  goToBookDetail(bookId: string): void {
    // Handle navigation to book details page using Angular Router
    // You should implement this based on your project's routing configuration
  }

  searchBooks(): void {
    if (this.searchQuery.trim() !== '') {
      this.bookService.searchBooks(this.searchQuery).subscribe((data: any) => {
        this.searchResults = data.items;
      });
    } else {
      this.searchResults = [];
    }
  }
  
}
