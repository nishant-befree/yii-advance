import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SMSFShortcutsComponent } from './shortcuts.component';
import { SharedModule } from '../../modules/shared.module';

@NgModule({
    declarations: [
        SMSFShortcutsComponent
    ],
    imports     : [
        SharedModule,
        RouterModule
    ],
    exports     : [
        SMSFShortcutsComponent
    ]
})
export class SMSFShortcutsModule
{
}
