import { Injectable } from '@angular/core';

@Injectable()
export class StackService {
   data : number[] = [];

   push(n:number) : void
   {
       this.data.push(n)
   }

   pop() : number 
   {
       return this.data.pop()
   }

   length() : number {
       return this.data.length;
   }

}