import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SMSFProjectComponent } from './project.component';
import { SharedModule } from '../../../../../core/modules/shared.module';

const routes: Routes = [
    {
        path     : 'apps/dashboards/project',
        component: SMSFProjectComponent,

    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        SMSFProjectComponent
    ],
    providers   : [

    ]
})
export class ProjectModule
{
}

