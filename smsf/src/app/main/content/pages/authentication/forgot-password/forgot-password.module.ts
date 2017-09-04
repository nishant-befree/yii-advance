import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { SMSFForgotPasswordComponent } from './forgot-password.component';

const routes = [
    {
        path     : 'pages/auth/forgot-password',
        component: SMSFForgotPasswordComponent
    }
];

@NgModule({
    declarations: [
        SMSFForgotPasswordComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class ForgotPasswordModule
{

}
