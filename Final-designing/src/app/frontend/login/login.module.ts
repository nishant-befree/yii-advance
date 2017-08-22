/**
 * Created by hemadrip on 8/22/2017.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        FormsModule,
        Http, HttpModule,
        BrowserModule,
        LoginRoutingModule,
        RouterModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
