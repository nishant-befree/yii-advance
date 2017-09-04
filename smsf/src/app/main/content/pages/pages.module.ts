import { NgModule } from '@angular/core';

import { LoginModule } from './authentication/login/login.module';
import { ForgotPasswordModule } from './authentication/forgot-password/forgot-password.module';

@NgModule({
    imports: [
        // Auth

        LoginModule,
        ForgotPasswordModule

    ]
})
export class PagesModule
{
}
