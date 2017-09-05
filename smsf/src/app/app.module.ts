import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SMSFMainModule } from './main/main.module';
import { PagesModule } from './main/content/pages/pages.module';
import { BucketModule } from './main/content/bucket/bucket.module';
import { SMSFConfigService } from './core/services/config.service';
import { SMSFSplashScreenService } from './core/services/splash-screen.service';
import { AuthGuard } from './core/services/auth.guard';
import { GlobalService } from './core/services/global.service';
import { UserService } from './core/services/user.service';
import { ComponentsThirdPartyModule } from './main/content/practice/components-third-party.module';
import { SMSFSampleModule } from './main/content/sample/sample.module';

const appRoutes: Routes = [
   /* {
        path      : '**',
        redirectTo: 'sample'
    },*/

    {
        path      : 'login',
        redirectTo: '/pages/auth/login'
    },
    {
        path      : 'dashboard',
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
        ReactiveFormsModule,
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
        SMSFConfigService,
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        },
        AuthGuard,
        UserService,
        GlobalService,
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
