import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SMSFMainModule } from './main/main.module';
import { PagesModule } from './main/content/pages/pages.module';
import { BucketModule } from './main/content/bucket/bucket.module';
import { SMSFSplashScreenService } from './core/services/splash-screen.service';
import { SMSFConfigService } from './core/services/config.service';
import { ComponentsThirdPartyModule } from './main/content/practice/components-third-party.module';
import { SMSFSampleModule } from './main/content/sample/sample.module';

const appRoutes: Routes = [
   /* {
        path      : '**',
        redirectTo: 'sample'
    },
    {
        path      : '**',
        redirectTo: '/pages/auth/login'
    }*/
    {
        path      : '**',
        redirectTo: 'apps/dashboards/project'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        PagesModule,
        BucketModule,
        PerfectScrollbarModule.forRoot(),
        SMSFMainModule,
        SMSFSampleModule,
        ComponentsThirdPartyModule
    ],
    providers   : [
        SMSFSplashScreenService,
        SMSFConfigService
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
