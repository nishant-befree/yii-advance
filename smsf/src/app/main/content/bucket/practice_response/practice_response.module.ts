import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';

import {Practice_responseComponent } from './practice_response.component';
import { Assigned_taskComponent } from './tabs/assigned_task/assigned_task.component';
import { Internal_queryComponent } from './tabs/Internal_query/Internal_query.component';
import { My_taskComponent } from './tabs/my_task/my_task.component';
import { Total_practice_responseComponent } from './tabs/total_practice_response/total_practice_response.component';
import { Unassign_taskComponent } from './tabs/Unassign_task/Unassign_task.component';

const routes: Routes = [
    {
        path     : 'bucket/practice_response',
        component: Practice_responseComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        Practice_responseComponent,
        Assigned_taskComponent,
        Internal_queryComponent,
        My_taskComponent,
        Total_practice_responseComponent,
        Unassign_taskComponent
    ]
})
export class Practice_responseModule
{
}
