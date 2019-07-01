import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UseStackComponent } from './services/usestack.component';
import { StackComponent } from './services/stack.component';
import { StackService } from './services/stack.service';
import { RegisterComponent } from './forms/register.component';

@NgModule({
  declarations: [
        UseStackComponent,StackComponent,
        RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [RegisterComponent]
})
export class AppModule { }
