import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'smsf-nav-subheader',
    templateUrl: './nav-subheader.component.html',
    styleUrls  : ['./nav-subheader.component.scss']
})
export class SMSFNavSubheaderComponent implements OnInit
{
    @HostBinding('class') classes = 'nav-subheader';
    @Input() item: any;

    constructor()
    {
    }

    ngOnInit()
    {
    }

}
