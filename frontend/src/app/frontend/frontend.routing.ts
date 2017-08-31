import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontendloginComponent } from './user-authentication/frontendlogin/frontendlogin.component';
import { ForgotpasswordComponent } from './user-authentication/forgotpassword/forgotpassword.component';
import { ForgotpasswordRequestComponent } from './user-authentication/forgotpassword_request/forgotpassword_request.component';
import {FullLayoutComponent} from './layouts/full-layout.component';
import {SimpleLayoutComponent}  from './layouts/simple-layout.component';
import {AuthGuard} from './services/auth.guard';

const routes: Routes = [
   {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: 'app/frontend/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'practice',
                loadChildren: 'app/frontend/practice/practice.module#PracticeModule'
            },

        ]
    },
    {
        path: '',
        component:SimpleLayoutComponent,
        children: [
            {
                path: 'forgotpassword',
                component: ForgotpasswordRequestComponent,
                data: {
                    title: 'Forgot password request'
                }
            },
            {
                path: 'changepassword',
                component: ForgotpasswordComponent,
                data: {
                    title: 'Forgot password'
                }
            },
            {
                path: 'login',
                pathMatch: 'full',
                component: FrontendloginComponent,
                data: {
                    title: 'Login'
                }
            }
        ],
    },
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontendRoutingModule { }