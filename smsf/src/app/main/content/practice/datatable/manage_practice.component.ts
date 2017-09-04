import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector   : 'smsf-manage_practice',
    templateUrl: './manage_practice.component.html',
    styleUrls  : ['./manage_practice.component.scss']
})
export class SMSFManagePracticeComponent implements OnInit
{
    rows: any[];
    loadingIndicator = true;
    reorderable = true;

    constructor(private http: Http)
    {

    }

    ngOnInit()
    {
        this.http.get('http://dev.befreecrm.com.au/yiiapp/pbackend/web/bucket')
            .subscribe(contacts => {
                this.rows = contacts.json().data;
                this.loadingIndicator = false;
            });
    }
}
