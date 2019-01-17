import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class ConfigService {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

    getConfig(menu: string): Observable<any> {
        return this.http.get('./assets/config/' + menu + '.json');
    }
}