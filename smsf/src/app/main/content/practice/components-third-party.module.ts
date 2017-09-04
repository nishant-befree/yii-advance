import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { SMSFManagePracticeComponent } from './datatable/manage_practice.component';

const routes = [
    {
        path     : 'practice/datatables/manage_practice',
        component: SMSFManagePracticeComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SMSFManagePracticeComponent
    ]
})
export class ComponentsThirdPartyModule
{
}
