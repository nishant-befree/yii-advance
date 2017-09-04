import { Component , OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector   : 'smsf-total_practice_respone',
    templateUrl: './total_practice_response.component.html',
    styleUrls  : ['./total_practice_response.component.scss']
})
export class Total_practice_responseComponent implements OnInit
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
