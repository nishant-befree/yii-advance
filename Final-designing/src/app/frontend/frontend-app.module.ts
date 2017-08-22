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
export class FrontendAppModule { }

/*
import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FrontendAppRoutingModule } from './frontend-routing.module';
import { FrontendAppComponent } from './frontend-app.component';
import { AuthGuard } from './shared';
@NgModule({
    declarations: [
        FrontendAppComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        NgModule,
        FormsModule,
        RouterModule,
        FrontendAppRoutingModule
    ],
    providers: [AuthGuard],
    bootstrap: [FrontendAppComponent]
})
export class FrontendAppModule {
}
*/