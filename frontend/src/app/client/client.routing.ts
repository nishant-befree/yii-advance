import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientloginComponent } from './clientlogin/clientlogin.component';

const routes: Routes = [
    { 
        path: '',
        component: ClientloginComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientRoutingModule { }