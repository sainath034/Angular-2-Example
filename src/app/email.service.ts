import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IEmail } from './email';

@Injectable()
export class EmailService {
    id:string;

    private _producturl = 'http://localhost:53973/api/Default/GetList';
    constructor(private _http: Http) { }

    getproducts(): Observable<IEmail[]> {
        return this._http.get(this._producturl)
            .map((response: Response) => <IEmail[]>response.json())
            .do(data => JSON.stringify(data));
    }

    editproduct(email: any) {
        localStorage.setItem('email', email);        
    }

    getdetails(){
        
        
    }
}