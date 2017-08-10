import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin.routing';
import { AdminComponent } from './admin_login/admin.component';

@NgModule({
    declarations: [AdminComponent],
    imports: [CommonModule, ReactiveFormsModule, AdminRoutingModule]
})
export class AdminModule { }