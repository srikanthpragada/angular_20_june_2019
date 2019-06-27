import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';


@NgModule({
  declarations: [
       PipesDemoComponent, BracketsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PipesDemoComponent]
})
export class AppModule { }
