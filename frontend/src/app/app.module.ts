import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { P404Component } from './error-pages/404.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { FrontendModule } from './frontend/frontend.module';

@NgModule({
  declarations: [
    AppComponent,
    P404Component,
    MainNavigationComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FrontendModule,
    HttpModule,

  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
