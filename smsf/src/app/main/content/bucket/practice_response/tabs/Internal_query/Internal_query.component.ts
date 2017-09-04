import { Component , OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector   : 'smsf-internal_query',
    templateUrl: './internal_query.component.html',
    styleUrls  : ['./internal_query.component.scss']
})
export class Internal_queryComponent implements OnInit
{

    rows: any[];
    loadingIndicator = true;
    reorderable = true;

    constructor(private http: Http)
    {

    }

    ngOnInit()
    {
        this.http.get('http://dev.befreecrm.com.au/yiiapp/pbackend/web/bucket/bucket/internalquery')
            .subscribe(contacts => {
                this.rows = contacts.json().data;
                this.loadingIndicator = false;
            });
    }
}