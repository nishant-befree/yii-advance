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

import {LoginAdminModule } from './admin/admin.module';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    P404Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,RouterModule,LoginAdminModule,
    RouterModule.forRoot(
        [
          {
            path:"admin",
            component:LoginAdminComponent
          },
          {
            path:"frontend",
            component:LoginComponent
          }
        ]
    )
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
