import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FrontendRoutingModule } from './frontend.routing';
import { FrontendloginComponent } from './frontendlogin/frontendlogin.component';

@NgModule({
    declarations: [FrontendloginComponent],
    imports: [CommonModule, ReactiveFormsModule, FrontendRoutingModule]
})
export class FrontendModule { }