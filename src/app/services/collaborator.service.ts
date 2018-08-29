import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GLOBAL } from './global';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from '../../../node_modules/ngx-webstorage';

@Injectable()
export class CollaboratorService {
    public url: string;

    constructor(
        private _http: Http,
        private storage: LocalStorageService
    ) {
        this.url = GLOBAL.url;
    }

    loginColab(collaborator) {
        collaborator.gettoken = true;
        let params = JSON.stringify(collaborator);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this._http.post(
            this.url + 'login-collaborator',
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
            this.url + 'register-collaborator',
            params,
            {
                headers: headers
            }
        ).map(
            res => res.json()
        );
    }
    getCollaborators() {
        const token = this.storage.retrieve('token');
        const headers = new Headers({
            'Authorization': token
        });
        return this._http.get(
            this.url + 'collaborators-homepage',
            { headers: headers }
        ).map(
            res => res.json()
        );
    }
    


}