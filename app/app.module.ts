import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';
import { PersonsComponent } from './persons/persons.component';

@NgModule({
  declarations: [
       HelloComponent,
       PersonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PersonsComponent]
})
export class AppModule { }
