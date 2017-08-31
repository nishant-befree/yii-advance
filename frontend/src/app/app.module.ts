import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { P404Component } from './error-pages/404.component';
import { FrontendModule } from './frontend/frontend.module';

import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule({
  declarations: [
    AppComponent,
    P404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FrontendModule,
    HttpModule,
    Ng2PaginationModule
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
