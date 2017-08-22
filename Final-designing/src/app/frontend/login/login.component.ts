import { Component, OnInit, OnDestroy,Input,OnChanges,SimpleChange  } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form;
  constructor(public router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("page-login-v2");
    body.classList.add("layout-full");
    body.classList.add("page-dark");

  }
  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("page-login-v2");
    body.classList.add("layout-full");
    body.classList.add("page-dark");
  }

}
