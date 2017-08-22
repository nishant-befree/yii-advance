import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontendloginComponent } from './user-authentication/frontendlogin/frontendlogin.component';
import { ForgotpasswordComponent } from './user-authentication/forgotpassword/forgotpassword.component';
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
                pathMatch: 'full',
                component: FrontendloginComponent,
                data: {
                    title: 'Login'
                }
            },
            {
                path: '',
                pathMatch: 'full',
                component: FrontendloginComponent,
                data: {
                    title: 'Login'
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