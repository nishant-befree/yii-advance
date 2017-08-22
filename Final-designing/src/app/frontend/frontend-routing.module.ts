/**
 * Created by hemadrip on 8/22/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontendAppRoutingModule { }

/*
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    /* { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
     { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
     { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FrontendAppRoutingModule { }
*/