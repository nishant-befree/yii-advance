import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontendloginComponent } from './frontendlogin/frontendlogin.component';

const routes: Routes = [
    { 
        path: '',
        component: FrontendloginComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontendRoutingModule { }