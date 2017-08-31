import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PracticeProfileComponent } from './practice-profile.component';
import { PracticeListComponent } from './practice-list.component';

import { PracticeRoutingModule } from './practice-routing.module';
import { SharedModule } from './../shared/shared.module';

import { DataTableDemo1 } from './demo1/data-table-demo1';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PracticeRoutingModule,
    SharedModule

  ],
  declarations: [ PracticeListComponent,PracticeProfileComponent
    ]
})
export class PracticeModule {

}
