import { Component, ViewEncapsulation } from '@angular/core';
import { SMSFNavigationService } from './navigation.service';

@Component({
    selector     : 'smsf-navigation',
    templateUrl  : './navigation.component.html',
    styleUrls    : ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SMSFNavigationComponent
{
    navigation: any[];

    constructor(private navigationService: SMSFNavigationService)
    {
        this.navigation = navigationService.getNavigation();
    }

}
