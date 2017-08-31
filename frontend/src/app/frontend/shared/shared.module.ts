import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';

import { FormsModule, ReactiveFormsModule }        from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { AuthModule } from './auth.module';

import {PaginatePipe} from './paginate.pipe';
import {PaginationService} from './pagination.service';
import {PaginationControlsComponent} from './pagination-controls.component';
import {PaginationControlsDirective} from './pagination-controls.directive';

export {PaginationInstance} from './pagination-instance';
export {PaginationService} from './pagination.service';
export {PaginationControlsComponent} from './pagination-controls.component';
export {PaginationControlsDirective} from './pagination-controls.directive';
export {PaginatePipe} from './paginate.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthModule,
    ],
    declarations: [
        PaginatePipe,
        PaginationControlsComponent,
        PaginationControlsDirective
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MomentModule,
        PaginatePipe, PaginationControlsComponent, PaginationControlsDirective
    ],
    providers: [PaginationService]
})
export class SharedModule {
}