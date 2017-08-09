import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin_login/admin.component';

@NgModule({
    declarations: [AdminComponent],
    imports: [CommonModule, ReactiveFormsModule, SharedModule, AdminRoutingModule]
})
export class AdminModule { }