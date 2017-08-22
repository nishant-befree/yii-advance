import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontendloginComponent } from './user-authentication/frontendlogin/frontendlogin.component';
import { ForgotpasswordComponent } from './user-authentication/forgotpassword/forgotpassword.component';
import { TopbarComponent } from './dashboard/topbar/topbar.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { PracticeProfileComponent } from './practice/practice-profile/practice-profile.component';
const routes: Routes = [
    {
        path: '',

        data: {
            title: 'Login'
        },
        children: [
            {
                path: 'forgotpassword',
                component: ForgotpasswordComponent,
                data: {
                    title: 'Forgot password'
                }
            },
            {
                path: 'frontendlogin',
                component: FrontendloginComponent,
                data: {
                    title: 'Forgot Login'
                }
            },
            {
                path: '',
                pathMatch: 'full',
                component: FrontendloginComponent,
                data: {
                    title: 'Login'
                }
            }, {
                path: 'dashboard',
                component: TopbarComponent,
                data: {
                    title: 'Top bar'
                }
            },
            {
                path: 'dashboard',
                component: SidebarComponent,
                data: {
                    title: 'Sidebar'
                }
            },
            {
                path: 'practice',
                component: PracticeProfileComponent,
                data: {
                    title: 'practice-profile'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontendRoutingModule { }