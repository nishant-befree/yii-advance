/**
 * Created by pankajk on 8/2/2017.
 */
import { NgModule } from '@angular/core';
import { Routes,
    RouterModule } from '@angular/router';

import { LogoutComponent } from './logout';

const routes: Routes = [
    {
        path: '',
        component: LogoutComponent,
        data: {
            title: 'Logout'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogoutRouting {}
