import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { SMSFLoginComponent } from './login.component';

const routes = [
    {
        path     : 'pages/auth/login',
        component: SMSFLoginComponent
    }
];

@NgModule({
    declarations: [
        SMSFLoginComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class LoginModule
{

}
