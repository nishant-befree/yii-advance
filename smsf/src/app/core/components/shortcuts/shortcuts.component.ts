import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SMSFNavigationService } from '../navigation/navigation.service';
import { Subscription } from 'rxjs/Subscription';
import { ObservableMedia } from '@angular/flex-layout';
import { SMSFMatchMedia } from '../../services/match-media.service';
import { SMSFConfigService } from '../../services/config.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector   : 'smsf-shortcuts',
    templateUrl: './shortcuts.component.html',
    styleUrls  : ['./shortcuts.component.scss']
})
export class SMSFShortcutsComponent implements OnInit, OnDestroy
{
    shortcutItems: any[] = [];
    navigationItems: any[];
    filteredNavigationItems: any[];
    searching = false;
    mobileShortcutsPanelActive = false;
    toolbarColor: string;
    matchMediaSubscription: Subscription;
    onSettingsChanged: Subscription;

    @ViewChild('searchInput') searchInputField;
    @ViewChild('shortcuts') shortcutsEl: ElementRef;

    constructor(
        private renderer: Renderer2,
        private observableMedia: ObservableMedia,
        private SMSFMatchMedia: SMSFMatchMedia,
        private SMSFNavigationService: SMSFNavigationService,
        private SMSFConfig: SMSFConfigService,
        private cookieService: CookieService
    )
    {
        this.filteredNavigationItems = this.navigationItems = this.SMSFNavigationService.getFlatNavigation();

        this.onSettingsChanged =
            this.SMSFConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.toolbarColor = newSettings.colorClasses.toolbar;
                    }
                );
    }

    ngOnInit()
    {
        const cookieExists = this.cookieService.check('smsf.shortcuts');

        if ( cookieExists )
        {
            this.shortcutItems = JSON.parse(this.cookieService.get('smsf.shortcuts'));
        }
        else
        {
            // User's shortcut items
            this.shortcutItems = [
                {
                    'title': 'Calendar',
                    'type' : 'nav-item',
                    'icon' : 'today',
                    'url'  : '/apps/calendar'
                },
                {
                    'title': 'Mail',
                    'type' : 'nav-item',
                    'icon' : 'email',
                    'url'  : '/apps/mail'
                },
                {
                    'title': 'Contacts',
                    'type' : 'nav-item',
                    'icon' : 'account_box',
                    'url'  : '/apps/contacts'
                },
                {
                    'title': 'To-Do',
                    'type' : 'nav-item',
                    'icon' : 'check_box',
                    'url'  : '/apps/todo'
                }
            ];
        }

        this.matchMediaSubscription =
            this.SMSFMatchMedia.onMediaChange.subscribe(() => {
                if ( this.observableMedia.isActive('gt-sm') )
                {
                    this.hideMobileShortcutsPanel();
                }
            });
    }

    ngOnDestroy()
    {
        this.matchMediaSubscription.unsubscribe();
    }

    search(event)
    {
        const value = event.target.value.toLowerCase();

        if ( value === '' )
        {
            this.searching = false;
            this.filteredNavigationItems = this.navigationItems;

            return;
        }

        this.searching = true;

        this.filteredNavigationItems = this.navigationItems.filter((navigationItem) => {
            return navigationItem.title.toLowerCase().includes(value);
        });
    }

    toggleShortcut(event, itemToToggle)
    {
        event.stopPropagation();

        for ( let i = 0; i < this.shortcutItems.length; i++ )
        {
            if ( this.shortcutItems[i].url === itemToToggle.url )
            {
                this.shortcutItems.splice(i, 1);

                // Save to the cookies
                this.cookieService.set('smsf.shortcuts', JSON.stringify(this.shortcutItems));

                return;
            }
        }

        this.shortcutItems.push(itemToToggle);

        // Save to the cookies
        this.cookieService.set('smsf.shortcuts', JSON.stringify(this.shortcutItems));
    }

    isInShortcuts(navigationItem)
    {
        return this.shortcutItems.find(item => {
            return item.url === navigationItem.url;
        });
    }

    onMenuOpen()
    {
        this.searchInputField.nativeElement.focus();
    }

    showMobileShortcutsPanel()
    {
        this.mobileShortcutsPanelActive = true;
        this.renderer.addClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    }

    hideMobileShortcutsPanel()
    {
        this.mobileShortcutsPanelActive = false;
        this.renderer.removeClass(this.shortcutsEl.nativeElement, 'show-mobile-panel');
    }
}
