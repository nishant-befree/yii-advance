import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { AdminModule } from './admin/admin.module';
import { PracticeModule } from './practice/practice.module';
import { ClientModule } from './client/client.module';
import { FrontendModule } from './frontend/frontend.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,AdminModule,PracticeModule, ClientModule,FrontendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
