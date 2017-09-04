import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SMSFMatchMedia } from '../../core/services/match-media.service';
import { SMSFNavbarService } from './navbar.service';
import { ObservableMedia } from '@angular/flex-layout';
import { SMSFMainComponent } from '../main.component';
import { NavigationEnd, Router } from '@angular/router';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { SMSFNavigationService } from '../../core/components/navigation/navigation.service';

@Component({
    selector     : 'smsf-navbar',
    templateUrl  : './navbar.component.html',
    styleUrls    : ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SMSFNavbarComponent implements OnInit, OnDestroy
{
    @HostBinding('class.close') isClosed: boolean;
    @HostBinding('class.folded') isFoldedActive: boolean;
    @HostBinding('class.folded-open') isFoldedOpen: boolean;
    @HostBinding('class.initialized') initialized: boolean;
    @Input('folded') foldedByDefault = false;
    @ViewChild(PerfectScrollbarDirective) perfectScrollbarDirective;

    matchMediaWatcher: Subscription;

    constructor(
        private SMSFMainComponentEl: SMSFMainComponent,
        private SMSFMatchMedia: SMSFMatchMedia,
        private SMSFNavigationService: SMSFNavigationService,
        private navBarService: SMSFNavbarService,
        public media: ObservableMedia,
        private router: Router
    )
    {
        navBarService.setNavBar(this);

        this.SMSFNavigationService.onNavCollapseToggled.subscribe(() => {

            setTimeout(() => {
                this.perfectScrollbarDirective.update();
            }, 310);
        });

        this.matchMediaWatcher =
            this.SMSFMatchMedia.onMediaChange
                .subscribe((mediaStep) => {
                    setTimeout(() => {

                        if ( this.media.isActive('lt-lg') )
                        {
                            this.closeBar();
                            this.deActivateFolded();
                        }
                        else
                        {
                            this.openBar();
                        }
                    });
                });

        router.events.subscribe(
            (event) => {
                if ( event instanceof NavigationEnd )
                {
                    if ( this.media.isActive('lt-lg') )
                    {
                        setTimeout(() => {
                            this.closeBar();
                        });
                    }
                }
            }
        );
    }

    ngOnInit()
    {
        this.isClosed = false;
        this.isFoldedActive = this.foldedByDefault;
        this.isFoldedOpen = false;
        this.initialized = false;
        this.updateCssClasses();

        setTimeout(() => {
            this.initialized = true;
        });

        if ( this.media.isActive('lt-lg') )
        {
            this.closeBar();
            this.deActivateFolded();
        }
        else
        {
            if ( !this.foldedByDefault )
            {
                this.deActivateFolded();
            }
            else
            {
                this.activateFolded();
            }
        }
    }

    openBar()
    {
        this.isClosed = false;
        this.updateCssClasses();
    }

    closeBar()
    {
        this.isClosed = true;
        this.updateCssClasses();
    }

    toggleBar()
    {
        if ( this.isClosed )
        {
            this.openBar();
        }
        else
        {
            this.closeBar();
        }
    }

    toggleFold()
    {
        if ( !this.isFoldedActive )
        {
            this.activateFolded();
        }
        else
        {
            this.deActivateFolded();
        }
    }

    activateFolded()
    {
        this.isFoldedActive = true;
        this.SMSFMainComponentEl.addClass('smsf-nav-bar-folded');
        this.isFoldedOpen = false;
    }

    deActivateFolded()
    {
        this.isFoldedActive = false;
        this.SMSFMainComponentEl.removeClass('smsf-nav-bar-folded');
        this.isFoldedOpen = false;
    }

    @HostListener('mouseenter')
    onMouseEnter()
    {
        this.isFoldedOpen = true;
    }

    @HostListener('mouseleave')
    onMouseLeave()
    {
        this.isFoldedOpen = false;
    }

    updateCssClasses()
    {
        if ( this.isClosed )
        {
            this.SMSFMainComponentEl.addClass('smsf-nav-bar-opened');
            this.SMSFMainComponentEl.removeClass('smsf-nav-bar-closed');
        }
        else
        {
            this.SMSFMainComponentEl.addClass('smsf-nav-bar-closed');
            this.SMSFMainComponentEl.removeClass('smsf-nav-bar-opened');
        }
    }

    ngOnDestroy()
    {
        this.matchMediaWatcher.unsubscribe();
    }
}
