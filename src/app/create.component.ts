import { Component } from '@angular/core';
import { IEmail } from './email';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector:'create',
    templateUrl:'create.component.html'
})

export class CreateComponent{
    Email:string;
    Password:string;

    constructor(private http: Http,private router:Router) { }

    create(event){
        
        this.http.post('http://localhost:53973/api/Default/Upsert',new IEmail(this.Email,this.Password))
        .subscribe(
            data => this.router.navigate(['List']),
            err => alert('failure')
        );
    }

    back =function(){
        this.router.navigate(['List'])
    }
}