import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ClientRoutingModule } from './client.routing';
import { ClientloginComponent } from './clientlogin/clientlogin.component';

@NgModule({
    declarations: [ClientloginComponent],
    imports: [CommonModule, ReactiveFormsModule, SharedModule, ClientRoutingModule]
})
export class ClientModule { }