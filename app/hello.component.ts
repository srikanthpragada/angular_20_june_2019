import { Component } from '@angular/core';

@Component({
  selector: 'st-hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent {
   message = 'Hello Angular';

   wish(name : string) {
     this.message = "Hello, " + name
   }
}
