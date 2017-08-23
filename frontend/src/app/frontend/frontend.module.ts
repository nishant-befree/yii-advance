import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {HttpModule} from '@angular/http';

import { FrontendRoutingModule } from './frontend.routing';
import { FrontendloginComponent } from './user-authentication/frontendlogin/frontendlogin.component';
import { ForgotpasswordComponent } from './user-authentication/forgotpassword/forgotpassword.component';
import { TopbarComponent } from './dashboard/topbar/topbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { PracticeProfileComponent } from './practice/practice-profile/practice-profile.component';
// Model & Services
import { AuthGuard } from './services/auth.guard';
import { GlobalService } from './services/global.service';
import { UserService } from './services/user.service';
//shared
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        FrontendloginComponent,
        ForgotpasswordComponent,
        TopbarComponent,
        SidebarComponent,
        PracticeProfileComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        FrontendRoutingModule,
        SharedModule
    ],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        AuthGuard,
        UserService,
        GlobalService
         ],
})
export class FrontendModule { }