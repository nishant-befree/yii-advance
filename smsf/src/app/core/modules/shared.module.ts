import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SMSFMdSidenavHelperDirective, SMSFMdSidenavTogglerDirective } from '../directives/md-sidenav-helper/md-sidenav-helper.directive';
import { SMSFPipesModule } from '../pipes/pipes.module';
import { SMSFConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { SMSFCountdownComponent } from '../components/countdown/countdown.component';
import { SMSFNavigationService } from '../components/navigation/navigation.service';
import { SMSFMatchMedia } from '../services/match-media.service';
import { SMSFNavbarService } from '../../main/navbar/navbar.service';
import { SMSFMdSidenavHelperService } from '../directives/md-sidenav-helper/md-sidenav-helper.service';
import { SMSFHljsComponent } from '../components/hljs/hljs.component';
import { SMSFIfOnDomDirective } from '../directives/smsf-if-on-dom/smsf-if-on-dom.directive';
import { SMSFMaterialColorPickerComponent } from '../components/material-color-picker/material-color-picker.component';
import { Md2Module } from 'md2';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
    declarations   : [
        SMSFMdSidenavHelperDirective,
        SMSFMdSidenavTogglerDirective,
        SMSFConfirmDialogComponent,
        SMSFCountdownComponent,
        SMSFHljsComponent,
        SMSFIfOnDomDirective,
        SMSFMaterialColorPickerComponent
    ],
    imports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        SMSFPipesModule,
        PerfectScrollbarModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDnDModule,
        NgxDatatableModule,
        Md2Module
    ],
    exports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        SMSFMdSidenavHelperDirective,
        SMSFMdSidenavTogglerDirective,
        SMSFPipesModule,
        SMSFCountdownComponent,
        SMSFHljsComponent,
        PerfectScrollbarModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDnDModule,
        NgxDatatableModule,
        SMSFIfOnDomDirective,
        SMSFMaterialColorPickerComponent,
        Md2Module
    ],
    entryComponents: [
        SMSFConfirmDialogComponent
    ],
    providers      : [
        CookieService,
        SMSFNavigationService,
        SMSFMatchMedia,
        SMSFNavbarService,
        SMSFMdSidenavHelperService
    ]
})

export class SharedModule
{

}
