/**
 * Created by pankajk on 8/2/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import {GlobalService} from './global.service';
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

    constructor(){

    }
    // When user logout we will remove token in localstorage
    public logout(): void {
        localStorage.removeItem('frontend-token');
        this.loggedIn = false;
    }
    //Check user log in
    public isLoggedIn(): boolean {
        return tokenNotExpired('frontend-token');
    }
}