/**
 * Created by hemadrip on 8/9/2017.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { LoginAdminComponent } from './login-admin/login-admin.component';
@NgModule(
    {
        imports:[BrowserModule,FormsModule],
        declarations: [LoginAdminComponent, LoginAdminComponent]
    }

)
export class LoginAdminModule{}