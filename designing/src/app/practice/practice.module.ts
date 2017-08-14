import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PracticeRoutingModule } from './practice.routing';
import { PracticeloginComponent } from './practicelogin/practicelogin.component';

@NgModule({
    declarations: [PracticeloginComponent],
    imports: [CommonModule, ReactiveFormsModule, PracticeRoutingModule]
})
export class PracticeModule { }