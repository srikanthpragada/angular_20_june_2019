import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UseStackComponent } from './services/usestack.component';
import { StackComponent } from './services/stack.component';
import { StackService } from './services/stack.service';
import { RLoginComponent } from './forms/rlogin.component';

@NgModule({
  declarations: [
     RLoginComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [RLoginComponent]
})
export class AppModule { }
