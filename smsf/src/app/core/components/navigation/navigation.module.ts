import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { RouterModule } from '@angular/router';
import { SMSFNavSubheaderComponent } from './nav-subheader/nav-subheader.component';
import { SMSFNavigationComponent } from './navigation.component';
import { SMSFNavItemComponent } from './nav-item/nav-item.component';
import { SMSFNavCollapseComponent } from './nav-collapse/nav-collapse.component';

@NgModule({
    imports     : [
        SharedModule,
        RouterModule
    ],
    exports     : [
        SMSFNavigationComponent
    ],
    declarations: [
        SMSFNavigationComponent,
        SMSFNavSubheaderComponent,
        SMSFNavItemComponent,
        SMSFNavCollapseComponent
    ]
})
export class SMSFNavigationModule
{
}
