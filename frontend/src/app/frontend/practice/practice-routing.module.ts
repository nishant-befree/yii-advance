import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PracticeProfileComponent } from './practice-profile.component';
import { PracticeListComponent } from './practice-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Practice'
    },
    children: [
      {
        path: 'list',
        component: PracticeListComponent,
        data: {
          title: 'List',
        }
      },
      {
        path: 'create',
        component: PracticeProfileComponent,
        data: {
          title: 'Create'
        }
      },
      {
        path: ':id',
        component: PracticeProfileComponent,
        data: {
          title: 'Update'
        }
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule {}
