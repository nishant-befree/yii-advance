/**
 * Created by pankajk on 8/2/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import {GlobalService} from './admin-global.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import {Router} from "@angular/router";

import {tokenNotExpired} from 'angular2-jwt';
import {AuthHttp, JwtHelper} from 'angular2-jwt';


@Injectable()
export class UserService {
    private loggedIn = false;
    public redirectURL = '';
    public jwtHelper: JwtHelper = new JwtHelper();

    constructor(private _globalService: GlobalService,
                private _router: Router,
                private _authHttp: AuthHttp) {
        this.loggedIn = this.isLoggedIn();
    }
//Check login credential
    public login(username, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');

        return this._authHttp
            .post(
                this._globalService.apiHost + '/user/login',
                JSON.stringify({
                    "LoginForm": {
                    "username": username,
                    "password": password
                }
                }),
                {headers: headers}
            )
            .map(response => response.json())
            .map((response) => {
                if (response.success) {
                    localStorage.setItem('user-token', response.data.access_token);
                    this.loggedIn = true;
                } else {
                    localStorage.removeItem('user-token');
                    this.loggedIn = false;
                }
                return response;
            })
            .catch(this.handleError);
    }
    // When user logout we will remove token in localstorage
    public logout(): void {
        localStorage.removeItem('user-token');
        this.loggedIn = false;
    }
    //Check user log in
    public isLoggedIn(): boolean {
        return tokenNotExpired('user-token');
    }
    // Handle Connection error function
    private handleError(error: Response | any) {

        let errorMessage: any = {};
        // Connection error
        if (error.status == 0) {
            errorMessage = {
                success: false,
                status: 0,
                data: "Sorry, there was a connection error occurred. Please try again.",
            };
        }
        else {
            errorMessage = error.json();
        }
        return Observable.throw(errorMessage);
    }
}