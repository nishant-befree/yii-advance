import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
