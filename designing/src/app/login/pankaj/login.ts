import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: 'login.html'
})
export class LoginComponent implements OnInit {
    form;
    constructor( ) { }

    ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl("", Validators.required),
            password: new FormControl("", Validators.required)
        });
    }
    submitForm(){

    }
}
