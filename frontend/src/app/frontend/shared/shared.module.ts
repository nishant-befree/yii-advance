import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';

import { FormsModule, ReactiveFormsModule }        from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { AuthModule } from './auth.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthModule,
    ],
    declarations: [
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MomentModule
    ],
    providers: []
})
export class SharedModule {
}