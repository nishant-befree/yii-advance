import { Component, OnInit, OnDestroy } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public userData: any = {};

  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {
    let jwtValue: any = this._userService.getJWTValue();
    if (jwtValue != null) {
      this.userData = jwtValue.data;
    }
    let body = document.getElementsByTagName('body')[0];
    body.classList.add("theme-cyan");
  }
  ngOnDestroy() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.remove("theme-cyan");
  }
}
