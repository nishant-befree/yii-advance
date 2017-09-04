import { Component , OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector   : 'smsf-unassign_task',
    templateUrl: './Unassign_task.component.html',
    styleUrls  : ['./Unassign_task.component.scss']
})
export class Unassign_taskComponent implements OnInit
{

    rows: any[];
    loadingIndicator = true;
    reorderable = true;

    constructor(private http: Http)
    {

    }

    ngOnInit()
    {
        this.http.get('http://dev.befreecrm.com.au/yiiapp/pbackend/web/bucket/bucket/unassigntask')
            .subscribe(contacts => {
                this.rows = contacts.json().data;
                this.loadingIndicator = false;
            });
    }
}
