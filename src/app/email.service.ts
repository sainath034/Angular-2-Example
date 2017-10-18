import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IEmail } from './email';
import { Router } from '@angular/router';

@Injectable()
export class EmailService {
    id: string;

    private _producturl = 'http://localhost:53973/api/Default/GetList';
    constructor(private _http: Http,private _router:Router) { }

    getproducts(): Observable<IEmail[]> {
        return this._http.get(this._producturl)
            .map((response: Response) => <IEmail[]>response.json())
            .do(
            data => console.log(JSON.stringify(data)),
            err => this._router.navigate(['PageNotFound'])
            )
            .catch(this.handleError);
    }

    editproduct(email: any) {
        localStorage.setItem('email', email);
    }

    private handleError(error: Response) {
        console.error(error); 
        return Observable.throw(error.json().error()); 
    }
}