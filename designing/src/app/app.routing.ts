import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PlayerListComponent } from './players/player-list/player-list.component';
import { NotFoundComponent } from './not-found.component';
import { AdminComponent } from './admin/admin_login/admin.component';
import { PracticeloginComponent } from './practice/practicelogin/practicelogin.component';
import { ClientloginComponent } from './client/clientlogin/clientlogin.component';
const routes: Routes = [
    {
        path:'teams',
        loadChildren: 'app/teams/teams.module#TeamsModule'
    },
    {
        path:'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    },
    {
        path:'practice',
        loadChildren: 'app/practice/practice.module#PracticeModule'
    },
    {
        path:'client',
        loadChildren: 'app/client/client.module#ClientModule'
    },
    {
        path: '',
        component: PlayerListComponent
    },
    {
        path: '',
        component: AdminComponent
    },
    {
        path: '',
        component: PracticeloginComponent
    },
    {
        path: '',
        component: ClientloginComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }