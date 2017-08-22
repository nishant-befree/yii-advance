import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FrontendRoutingModule } from './frontend.routing';
import { FrontendloginComponent } from './user-authentication/frontendlogin/frontendlogin.component';
import { ForgotpasswordComponent } from './user-authentication/forgotpassword/forgotpassword.component';
import { TopbarComponent } from './dashboard/topbar/topbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { PracticeProfileComponent } from './practice/practice-profile/practice-profile.component';

@NgModule({
    declarations: [FrontendloginComponent, ForgotpasswordComponent, TopbarComponent, SidebarComponent,PracticeProfileComponent],
    imports: [CommonModule, ReactiveFormsModule, FrontendRoutingModule]
})
export class FrontendModule { }