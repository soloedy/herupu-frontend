import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GLOBAL } from './global';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CollaboratorService {
    public url: string;

    constructor(private _http: Http) {
        this.url = GLOBAL.url;
    }

    login(collaborator) {
        collaborator.gettoken = true;
        let params = JSON.stringify(collaborator);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this._http.post(
            this.url + 'login',
            params,
            {
                headers: headers
            }
        ).map(
            res => res.json()
        );
    }

    register(collaborator) {
        let params = JSON.stringify(collaborator);
        console.log(params);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this._http.post(
            this.url + 'register',
            params,
            {
                headers: headers
            }
        ).map(
            res => res.json()
        );
    }
}