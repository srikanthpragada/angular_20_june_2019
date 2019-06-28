import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstComponent } from './icc/first.component';
import { SecondComponent } from './icc/second.component';
import { ProductsListComponent } from './icc/products-list.component';
import { ProductDetailsComponent } from './icc/product-details.component';


@NgModule({
  declarations: [
       ProductsListComponent,
       ProductDetailsComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProductsListComponent]
})
export class AppModule { }
