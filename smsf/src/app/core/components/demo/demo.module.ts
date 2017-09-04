import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { RouterModule } from '@angular/router';
import { SMSFContentComponent } from './demo-content/demo-content.component';
import { SMSFSidenavComponent } from './demo-sidenav/demo-sidenav.component';

@NgModule({
    declarations: [
        SMSFContentComponent,
        SMSFSidenavComponent
    ],
    imports     : [
        SharedModule,
        RouterModule
    ],
    exports     : [
        SMSFContentComponent,
        SMSFSidenavComponent
    ]
})
export class SMSFModule
{
}
