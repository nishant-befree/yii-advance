import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PracticeRoutingModule } from './practice.routing';
import { PracticeloginComponent } from './practicelogin/practicelogin.component';

@NgModule({
    declarations: [PracticeloginComponent],
    imports: [CommonModule, ReactiveFormsModule, SharedModule, PracticeRoutingModule]
})
export class PracticeModule { }