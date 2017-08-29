import { Component, OnInit, OnDestroy } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

    public userData:any = {};

    constructor(private _staffService:UserService) { }

    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};

    /*public toggled(open:boolean):void {
   }

    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }*/

    ngOnInit(): void {
        let jwtValue:any = this._staffService.getJWTValue();
        this.userData = jwtValue.data;

            let body = document.getElementsByTagName('body')[0];
            body.classList.add("site-menubar-unfold");
        }
        ngOnDestroy() {
            let body = document.getElementsByTagName('body')[0];
            body.classList.remove("site-menubar-unfold");
        }
    }

