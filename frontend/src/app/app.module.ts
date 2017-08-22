import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import {HttpModule} from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { P404Component } from './error-pages/404.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { AdminModule } from './admin/admin.module';
import { PracticeModule } from './practice/practice.module';
import { ClientModule } from './client/client.module';
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
    HttpModule,
    AppRoutingModule,
    FrontendModule
  ],
  providers: [
      {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
