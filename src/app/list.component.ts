import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { EmailService } from './email.service';
import { IEmail } from './email';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'assets/list.js'

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    providers: [EmailService]
})

export class ListComponent{
    iproducts: IEmail[];

    constructor(private _product: EmailService,private http: Http,private router:Router) {
    }
    
    ngOnInit() : void {
        this._product.getproducts()
        .subscribe(iproducts => this.iproducts = iproducts);
    }

    edit(email:string) {
        this._product.editproduct(email);

        this.router.navigate(['/Edit'])
     }

     delete(email:string) { 
         alert(email);

        this.http.post('http://localhost:53973/api/Default/Delete',new IEmail(email,''))
        .subscribe(
            data => 
            this._product.getproducts()
            .subscribe(iproducts => this.iproducts = iproducts),
            err => 
            alert('failure')
        )
     }
}