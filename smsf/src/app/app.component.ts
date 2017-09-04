import { Component } from '@angular/core';
import { SMSFSplashScreenService } from './core/services/splash-screen.service';

@Component({
    selector   : 'smsf-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent
{
    constructor(private SMSFSplashScreen: SMSFSplashScreenService)
    {
    }
}
