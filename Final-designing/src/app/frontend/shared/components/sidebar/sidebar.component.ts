import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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
