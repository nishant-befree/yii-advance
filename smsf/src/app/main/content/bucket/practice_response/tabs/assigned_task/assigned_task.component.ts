import { Component , OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector   : 'smsf-assigned_task',
    templateUrl: './assigned_task.component.html',
    styleUrls  : ['./assigned_task.component.scss']
})
export class Assigned_taskComponent implements OnInit
{

    rows: any[];
    loadingIndicator = true;
    reorderable = true;
    columns = [
        { prop: 'company_name' },
        { name: 'service_division' },
        { name: 'job_type_id' }
    ];
    constructor(private http: Http)
    {
        this.fetch((data) => {
            // cache our list
            this.temp = [...data];

            // push our inital complete list
            this.rows = data;
        });
    }

    fetch(data){

        this.http.get('http://dev.befreecrm.com.au/yiiapp/pbackend/web/bucket/bucket/assigntask')
            .subscribe(contacts => {
                this.rows = contacts.json().data;
                this.loadingIndicator = false;
            });
    }
    ngOnInit()
    {
        this.fetch(data);
    }
}