import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FrontendRoutingModule } from './frontend.routing';
import { FrontendloginComponent } from './user-authentication/frontendlogin/frontendlogin.component';
import { ForgotpasswordComponent } from './user-authentication/forgotpassword/forgotpassword.component';
import { TopbarComponent } from './dashboard/topbar/topbar.component';
// Model & Services
import { AuthService } from './services/auth.service';
import { GlobalService } from './services/global.service';
import { UserService } from './services/user.service';
 //shared
import { SharedModule } from './shared/shared.module';
@NgModule({
    declarations: [
        FrontendloginComponent,
        ForgotpasswordComponent,
        TopbarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        FrontendRoutingModule
    ],
    providers: [ AuthService, GlobalService, UserService],
})
export class FrontendModule { }