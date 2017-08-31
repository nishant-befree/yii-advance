import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { P404Component } from './error-pages/404.component';
import { AdminComponent } from './admin/admin_login/admin.component';
import { PracticeloginComponent } from './practice/practicelogin/practicelogin.component';
import { ClientloginComponent } from './client/clientlogin/clientlogin.component';
import { FrontendloginComponent } from './frontend/user-authentication/frontendlogin/frontendlogin.component';
const routes: Routes = [
    {
        path: '',
        redirectTo: 'frontend',
        pathMatch: 'full',
    },
    {
        path: '',
        component:FrontendloginComponent,
        pathMatch: 'full',
        loadChildren: 'app/frontend/frontend.module#FrontendModule'
    },
    {
        path:'frontend',
        loadChildren: 'app/frontend/frontend.module#FrontendModule'
    },
    {
        path:'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    },
    {
        path:'practice',
        loadChildren: 'app/practice/practice.module#PracticeModule'
    },
    {
        path:'client',
        loadChildren: 'app/client/client.module#ClientModule'
    },

    {
        path: '**',
        component: P404Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }