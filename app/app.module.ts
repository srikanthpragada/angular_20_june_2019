import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { WebBooks2Component } from './http/webbooks2.component.';
import { BooksService } from './services/BooksService';


@NgModule({
  declarations: [
       WebBooks2Component      
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BooksService],
  bootstrap: [WebBooks2Component]
})
export class AppModule { }
