import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../core/modules/shared.module';

import { SMSFMainComponent } from './main.component';
import { SMSFContentComponent } from './content/content.component';
import { SMSFFooterComponent } from './footer/footer.component';
import { SMSFNavbarComponent } from './navbar/navbar.component';
import { SMSFToolbarComponent } from './toolbar/toolbar.component';
import { SMSFNavigationModule } from '../core/components/navigation/navigation.module';
import { SMSFNavbarToggleDirective } from './navbar/navbar-toggle.directive';
import { SMSFQuickPanelComponent } from './quick-panel/quick-panel.component';
import { SMSFThemeOptionsComponent } from '../core/components/theme-options/theme-options.component';
import { SMSFShortcutsModule } from '../core/components/shortcuts/shortcuts.module';
import { SMSFSearchBarModule } from '../core/components/search-bar/search-bar.module';

@NgModule({
    declarations: [
        SMSFContentComponent,
        SMSFFooterComponent,
        SMSFMainComponent,
        SMSFNavbarComponent,
        SMSFToolbarComponent,
        SMSFNavbarToggleDirective,
        SMSFThemeOptionsComponent,
        SMSFQuickPanelComponent
    ],
    imports     : [
        SharedModule,
        RouterModule,
        SMSFNavigationModule,
        SMSFShortcutsModule,
        SMSFSearchBarModule
    ],
    exports     : [
        SMSFMainComponent
    ]
})

export class SMSFMainModule
{
}
