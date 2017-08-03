import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";
// Routing Module
import {AppRoutingModule} from './app.routing';
import { LoginComponent } from './login/login.component';
//for error
import { P404Component } from './error-pages/404.component';
//services
import { UserService } from './services/user.service';
import { ForgotpaswordComponent } from './forgotpasword/forgotpasword.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    P404Component,
    ForgotpaswordComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,RouterModule
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
