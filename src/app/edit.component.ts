import { Component } from '@angular/core';
import { IEmail } from './email';
import { Http,Response } from '@angular/http';
import { Router } from '@angular/router';
import { EmailService } from './email.service'

@Component({
    selector:'edit',
    templateUrl:'edit.component.html',
    providers: [EmailService]
})

export class EditComponent{
    iproducts: IEmail[];

    constructor(private _http: Http,private router:Router) { }

    ngOnInit() : void {
        this._http.post('http://localhost:53973/api/Default/Edit', new IEmail(localStorage.getItem('email'), ''))
        .map((response: Response) => <IEmail[]>response.json())
        .subscribe(iproducts => this.iproducts = iproducts,function(error){alert('failure')});

        localStorage.removeItem('email');
    }

    edit = function(){
        this._http.post('http://localhost:53973/api/Default/Upsert',new IEmail(this.iproducts.Registers[0].Email,this.iproducts.Registers[0].Password))
        .subscribe(
            data => this.router.navigate(['List']),
            err => alert('failure')
        );
    }

    delete = function(email : string){
        alert(email);

        this._http.post('http://localhost:53973/api/Default/Delete',new IEmail(email,''))
        .do(
            data => alert(email + 'Deleted successfully'),
            err => alert('failure')
        )
    }

    back =function(){
        this.router.navigate(['List'])
    }
}