import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding, AfterViewInit } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { SMSFMdSidenavHelperService } from 'app/core/directives/md-sidenav-helper/md-sidenav-helper.service';
import { SMSFMatchMedia } from '../../services/match-media.service';
import { ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

@Directive({
    selector: '[SMSFMdSidenavHelper]'
})
export class SMSFMdSidenavHelperDirective implements OnInit, AfterViewInit, OnDestroy
{
    matchMediaSubscription: Subscription;

    @HostBinding('class.md-is-locked-open') isLockedOpen = true;
    @HostBinding('class.md-stop-transition') stopTransition = true;

    @Input('SMSFMdSidenavHelper') id: string;
    @Input('md-is-locked-open') mdIsLockedOpenBreakpoint: string;

    constructor(
        private SMSFMdSidenavService: SMSFMdSidenavHelperService,
        private SMSFMatchMedia: SMSFMatchMedia,
        private observableMedia: ObservableMedia,
        private mdSidenav: MdSidenav
    )
    {
    }

    ngOnInit()
    {
        this.SMSFMdSidenavService.setSidenav(this.id, this.mdSidenav);

        if ( this.observableMedia.isActive(this.mdIsLockedOpenBreakpoint) )
        {
            setTimeout(() => {
                this.isLockedOpen = true;
                this.mdSidenav.mode = 'side';
                this.mdSidenav.open();
            });
        }
        else
        {
            setTimeout(() => {
                this.isLockedOpen = false;
                this.mdSidenav.mode = 'over';
                this.mdSidenav.close();
            });
        }

        this.matchMediaSubscription = this.SMSFMatchMedia.onMediaChange.subscribe(() => {
            if ( this.observableMedia.isActive(this.mdIsLockedOpenBreakpoint) )
            {
                setTimeout(() => {
                    this.isLockedOpen = true;
                    this.mdSidenav.mode = 'side';
                    this.mdSidenav.open();
                });
            }
            else
            {
                setTimeout(() => {
                    this.isLockedOpen = false;
                    this.mdSidenav.mode = 'over';
                    this.mdSidenav.close();
                });
            }
        });

    }

    ngAfterViewInit()
    {
        setTimeout(() => {
            this.stopTransition = false;
        }, 0);
    }

    ngOnDestroy()
    {
        this.matchMediaSubscription.unsubscribe();
    }
}

@Directive({
    selector: '[SMSFMdSidenavToggler]'
})
export class SMSFMdSidenavTogglerDirective
{
    @Input('SMSFMdSidenavToggler') id;

    constructor(private SMSFMdSidenavService: SMSFMdSidenavHelperService)
    {
    }

    @HostListener('click')
    onClick()
    {
        this.SMSFMdSidenavService.getSidenav(this.id).toggle();
    }
}
