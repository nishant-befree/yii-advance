import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-clientlogin',
  templateUrl: './clientlogin.component.html',
  styleUrls: ['./clientlogin.component.css']
})
export class ClientloginComponent implements OnInit {

  form;
  constructor(public router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("login-page");

  }
  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("login-page");
  }
  submitForm(){

  }
}
