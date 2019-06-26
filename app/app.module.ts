import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BindingComponent } from './binding/binding.component';

@NgModule({
  declarations: [
       BindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BindingComponent]
})
export class AppModule { }
