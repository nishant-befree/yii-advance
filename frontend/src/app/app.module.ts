import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
// Routing Module
import {AppRoutingModule} from './app.routing';
import { LoginComponent } from './login/login';
import { ForgotPassword } from './forgot-password/forgot-password';
//for error
import { P404Component } from './error-pages/404.component';
//services
import { UserService } from './services/user.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPassword,
    P404Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
