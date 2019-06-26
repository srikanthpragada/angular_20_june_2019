import { Component, OnInit } from '@angular/core';
import { Person } from './person';


@Component({
    selector: 'st-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit {
    persons : Person [] = [];
    message : string = ""
    constructor() { }

    ngOnInit(): void { }

    addPerson(name : string, mobile : string) {

        /* check whether mobile number is valid */
        if ( mobile.length != 10)
        {
            this.message = "Invalid Mobile Number!";
            return;
        }
        
        /* check whether name is already present */
        this.message = ""
        for (var p of this.persons)
        {
             if(p.name == name) {
                 this.message = "Name already present!";
                 return;
             }
        }



        var p = new Person()
        p.name = name;
        p.mobile = mobile; 
        this.persons.push(p);
        console.log(this.persons)
    }

    deletePerson(pos : number) 
    {
        /*
        var pos : number = -1;
        
        // find out position of the person 
        for(var idx in this.persons)
        {
            if ( this.persons[idx].name == name)
            {
               pos = parseInt(idx);
               break;
            }
        }
 
        if (pos >= 0)
        */

        this.persons.splice(pos,1)
    }
}
