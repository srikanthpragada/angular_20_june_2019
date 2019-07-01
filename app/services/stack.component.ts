import { Component  } from '@angular/core';
import { StackService } from './stack.service';

@Component({
    selector: 'st-stack',
    templateUrl: './usestack.component.html',
    providers : [StackService]
})
export class StackComponent  {
    value : number; 
    length : number;
    // DI of StackService 
    constructor(private stack : StackService) { 

    }

    pushValue(n: number) 
    {
        this.stack.push(n)
        this.length = this.stack.length();
    }

    popValue() 
    {
        this.value = this.stack.pop();
        this.length = this.stack.length();
    }
}
