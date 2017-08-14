import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FrontendRoutingModule } from './frontend.routing';
import { FrontendloginComponent } from './user-authentication/frontendlogin/frontendlogin.component';
import { ForgotpasswordComponent } from './user-authentication/forgotpassword/forgotpassword.component';
import { TopbarComponent } from './dashboard/topbar/topbar.component';

@NgModule({
    declarations: [
        FrontendloginComponent,
        ForgotpasswordComponent,
        TopbarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FrontendRoutingModule
    ]
})
export class FrontendModule { }