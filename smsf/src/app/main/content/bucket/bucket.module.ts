import { NgModule } from '@angular/core';


import { Practice_responseModule } from './practice_response/practice_response.module';
import { ProductivityBucketComponent } from './productivity-bucket/productivity-bucket.component';
import { PracticeComponent } from './practice/practice.component';
import { JobComponent } from './job/job.component';
import { TaskComponent } from './task/task.component';
import { PendingItemComponent } from './pending-item/pending-item.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
    imports: [
        Practice_responseModule
    ],
    declarations: [ProductivityBucketComponent, PracticeComponent, JobComponent, TaskComponent, PendingItemComponent, ReportsComponent]
})
export class BucketModule
{
}
