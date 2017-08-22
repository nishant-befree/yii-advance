import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("theme-cyan");
  }
  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("theme-cyan");
  }


}
