import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { SMSFWidgetComponent } from './widget.component';
import { SMSFWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    imports     : [
        SharedModule
    ],
    exports     : [
        SMSFWidgetComponent,
        SMSFWidgetToggleDirective
    ],
    declarations: [
        SMSFWidgetComponent,
        SMSFWidgetToggleDirective
    ]
})
export class SMSFWidgetModule
{
}
