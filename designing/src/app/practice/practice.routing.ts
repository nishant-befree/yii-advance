import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PracticeloginComponent } from './practicelogin/practicelogin.component';

const routes: Routes = [
    { 
        path: '',
        component: PracticeloginComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PracticeRoutingModule { }