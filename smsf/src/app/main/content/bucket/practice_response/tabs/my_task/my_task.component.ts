import { Component , OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector   : 'smsf-my_task',
    templateUrl: './my_task.component.html',
    styleUrls  : ['./my_task.component.scss']
})
export class My_taskComponent implements OnInit
{

    rows: any[];
    loadingIndicator = true;
    reorderable = true;

    constructor(private http: Http)
    {

    }

    ngOnInit()
    {
        this.http.get('http://dev.befreecrm.com.au/yiiapp/pbackend/web/bucket/bucket/mytask')
            .subscribe(contacts => {
                this.rows = contacts.json().data;
                this.loadingIndicator = false;
            });
    }
}