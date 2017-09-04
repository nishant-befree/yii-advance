import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Animations } from '../../core/animations';
import { SMSFConfigService } from '../../core/services/config.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
    selector   : 'smsf-content',
    templateUrl: './content.component.html',
    styleUrls  : ['./content.component.scss'],
    animations : [
        Animations.routerTransitionUp,
        Animations.routerTransitionDown,
        Animations.routerTransitionRight,
        Animations.routerTransitionLeft,
        Animations.routerTransitionFade
    ]
})
export class SMSFContentComponent implements OnInit, OnDestroy
{
    onSettingsChanged: Subscription;
    smsfSettings: any;

    @HostBinding('@routerTransitionUp') routeAnimationUp = false;
    @HostBinding('@routerTransitionDown') routeAnimationDown = false;
    @HostBinding('@routerTransitionRight') routeAnimationRight = false;
    @HostBinding('@routerTransitionLeft') routeAnimationLeft = false;
    @HostBinding('@routerTransitionFade') routeAnimationFade = false;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private smsfConfig: SMSFConfigService
    )
    {
        this.router.events
            .filter((event) => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .subscribe((event) => {
                switch ( this.smsfSettings.routerAnimation )
                {
                    case 'fadeIn':
                        this.routeAnimationFade = !this.routeAnimationFade;
                        break;
                    case 'slideUp':
                        this.routeAnimationUp = !this.routeAnimationUp;
                        break;
                    case 'slideDown':
                        this.routeAnimationDown = !this.routeAnimationDown;
                        break;
                    case 'slideRight':
                        this.routeAnimationRight = !this.routeAnimationRight;
                        break;
                    case 'slideLeft':
                        this.routeAnimationLeft = !this.routeAnimationLeft;
                        break;
                }
            });

        this.onSettingsChanged =
            this.smsfConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.smsfSettings = newSettings;
                    }
                );
    }

    ngOnInit()
    {

    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }
}
