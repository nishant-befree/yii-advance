/**
 * Created by pankajk on 8/2/2017.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { UserService } from './admin.service';

@Injectable()
export class AuthService implements CanActivate, CanActivateChild {
    constructor(private userService: UserService, private router:Router) {}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
        let url:string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    checkLogin(url: string):boolean{
        if(this.userService.isLoggedIn()) {  return true; }

        // Store the attempted URL for redirecting
        this.userService.redirectURL = url;

        // Navigate to the login page with extras
        this.router.navigate(['/login'], { queryParams: { r: url }});
        return false;
    }
}