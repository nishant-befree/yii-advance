import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {HttpModule} from '@angular/http';
import { RemoteService } from './practice/demo1/data-table-demo1-remote-service';

import { FrontendRoutingModule } from './frontend.routing';
import { FrontendloginComponent } from './user-authentication/frontendlogin/frontendlogin.component';
import { ForgotpasswordComponent } from './user-authentication/forgotpassword/forgotpassword.component';
import { ForgotpasswordRequestComponent } from './user-authentication/forgotpassword_request/forgotpassword_request.component';
import {FullLayoutComponent} from './layouts/full-layout.component';
import {SimpleLayoutComponent}  from './layouts/simple-layout.component';
import {SidebarComponent} from './layouts/sidebar/sidebar.component';
import {TopbarComponent}  from './layouts/topbar/topbar.component';
// Model & Services
import { AuthGuard } from './services/auth.guard';
import { GlobalService } from './services/global.service';
import { UserService } from './services/user.service';
import {HttpService} from './services/http.service';
//shared
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        FrontendloginComponent,
        ForgotpasswordComponent,
        ForgotpasswordRequestComponent,
        FullLayoutComponent,
        SimpleLayoutComponent,
        TopbarComponent,
        SidebarComponent
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
        GlobalService,
        HttpService

         ],
})
export class FrontendModule { }