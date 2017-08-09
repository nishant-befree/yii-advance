import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { PlayersModule } from './players/players.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { AdminModule } from './admin/admin.module';
import { PracticeModule } from './practice/practice.module';
import { ClientModule } from './client/client.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    MainNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PlayersModule,
    AppRoutingModule,AdminModule,PracticeModule, ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
