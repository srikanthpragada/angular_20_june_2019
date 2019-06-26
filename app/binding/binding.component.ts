import { Component } from '@angular/core';

@Component({
    selector: 'st-binding',
    templateUrl: './binding.component.html'
})
export class BindingComponent  {

    today : Date;
    isMarried : boolean = false; 

    constructor() {
        this.today  = new Date()
    }

    showMouse(e : any ) {
        console.log(e.x + ","  + e.y)
    }
    
}
