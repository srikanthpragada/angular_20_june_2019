import { Component, OnInit } from '@angular/core';
import { Person } from './person';


@Component({
    selector: 'st-persons',
    templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit {
    persons : Person [] = [];
    constructor() { }

    ngOnInit(): void { }

    addPerson(name : string, mobile : string) {
        var p = new Person()
        p.name = name;
        p.mobile = mobile; 
        this.persons.push(p);
        console.log(this.persons)
    }

    deletePerson(name:string) 
    {
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
           this.persons.splice(pos,1)
    }
}
