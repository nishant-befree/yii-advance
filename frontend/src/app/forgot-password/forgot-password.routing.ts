import {NgModule} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { ForgotPassword } from './forgot-password';

const routes: Routes = [
    {
        path: '',
        component: ForgotPassword,
        data: {
            title: 'Password Reset Request'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ForgotPasswordRouting {
}
