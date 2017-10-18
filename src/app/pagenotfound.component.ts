import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'error',
    templateUrl: './pagenotfound.component.html'
})

export class PageNotFoundComponent {
    constructor(private router: Router) { }

    home = function () {
        this.router.navigate(['List'])
    }
}