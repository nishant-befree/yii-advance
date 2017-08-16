/**
 * Created by pankajk on 8/2/2017.
 */
import {NgModule} from '@angular/core';

import {LogoutComponent} from './logout';
import {LogoutRouting} from './logout-routing';

@NgModule({
    imports: [
        LogoutRouting
    ],
    declarations: [
        LogoutComponent
    ]
})
export class LogoutModule {
}
