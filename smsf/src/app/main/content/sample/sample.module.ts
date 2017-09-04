import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../core/modules/shared.module';

import { SMSFSampleComponent } from './sample.component';

const routes = [
    {
        path     : 'sample',
        component: SMSFSampleComponent
    }
];

@NgModule({
    declarations: [
        SMSFSampleComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports     : [
        SMSFSampleComponent
    ]
})

export class SMSFSampleModule
{
}
