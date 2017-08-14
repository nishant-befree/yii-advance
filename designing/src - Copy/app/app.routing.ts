/**
 * Created by pankajk on 8/1/2017.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Layouts
import { LoginComponent } from './login/login.component';
import {P404Component} from './error-pages/404.component';

export const routes: Routes = [
    {
        path: '',
        component:LoginComponent,
    },
    { path: '**', component: P404Component }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}