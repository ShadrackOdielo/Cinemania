import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  book: any; // Define your book object here

  constructor(private route: ActivatedRoute, private bookService: BookService) {}

  ngOnInit(): void {
    // Access the book's ID from the route parameters
    this.route.paramMap.subscribe((params) => {
      const bookId = params.get('id');
      if (bookId) {
        // Fetch book details using the bookId
        this.bookService.getBookDetails(bookId).subscribe((data: any) => {
          this.book = data;
        });
      }
    });
  }
}
