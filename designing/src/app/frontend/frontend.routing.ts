import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontendloginComponent } from './user-authentication/frontendlogin/frontendlogin.component';
import { ForgotpasswordComponent } from './user-authentication/forgotpassword/forgotpassword.component';
const routes: Routes = [
    { 
        path: '',
        component: FrontendloginComponent
    },
    {
        path:'forgotpassword',
        loadChildren: 'forgotpassword/forgotpassword.module#ForgotpasswordModule'
    },

    {
        path:'frontend',
        loadChildren: 'app/frontend/user-authentication/forgotpassword/forgotpassword.module#ForgotpasswordModule'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontendRoutingModule { }