import { Component, OnInit } from '@angular/core';
import { WebBook } from './WebBook';
import { BooksService } from '../services/BooksService';

@Component({
    selector: 'st-books',
    templateUrl: './webbooks.component.html'
})
export class WebBooks2Component implements OnInit {
    books: WebBook[];

    constructor(private booksService: BooksService) {
    }

    ngOnInit() {
       this.booksService.getBooks()
          .subscribe( result => this.books = result);
    }
}