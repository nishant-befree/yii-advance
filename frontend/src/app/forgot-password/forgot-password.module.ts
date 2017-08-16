/**
 * Created by pankajk on 8/3/2017.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ForgotPassword } from './forgot-password';
import { ForgotPasswordRouting } from './forgot-password.routing';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ForgotPasswordRouting
    ],
    declarations: [
        ForgotPassword,
    ]
})
export class ForgotPasswordModule {
}
