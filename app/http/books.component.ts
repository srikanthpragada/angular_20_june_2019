import { Component, OnInit } from '@angular/core';
import { Book } from './Book';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';

@Component({
    selector: 'st-books',
    templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
    books: Book[] = null;
    errorObj : HttpErrorResponse = null;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
         // make AJAX request 
         this.http.get<Book[]>("assets/book.json")
                  .subscribe( resp => this.books = resp,   // on success
                              error => {                   // on error 
                                   this.errorObj = error; 
                                   console.log(error) 
                                }
                            );
    }

}