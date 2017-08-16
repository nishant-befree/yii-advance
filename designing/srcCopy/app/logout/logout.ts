/**
 * Created by pankajk on 8/2/2017.
 */
import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-logout',
    template: '<strong>Logging out...</strong>',
})
export class LogoutComponent implements OnInit {

    public submitted:boolean = false;
    public error:string = '';

    constructor(private userService:UserService, private router:Router) { }

    ngOnInit() {
        this.userService.logout();
        this.router.navigate(['/']);
    }


}
