import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector     : 'smsf-quick-panel',
    templateUrl  : './quick-panel.component.html',
    styleUrls    : ['./quick-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SMSFQuickPanelComponent implements OnInit
{
    date: Date;
    settings: any;

    constructor()
    {
        this.date = new Date();
        this.settings = {
            notify: true,
            cloud : false,
            retro : true
        };

    }

    ngOnInit()
    {

    }

}
