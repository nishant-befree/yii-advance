import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../modules/shared.module';
import { SMSFSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        SMSFSearchBarComponent
    ],
    imports     : [
        SharedModule,
        RouterModule
    ],
    exports     : [
        SMSFSearchBarComponent
    ]
})
export class SMSFSearchBarModule
{
}
