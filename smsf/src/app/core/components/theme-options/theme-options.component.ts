import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { style, animate, AnimationBuilder, AnimationPlayer } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';
import { SMSFConfigService } from '../../services/config.service';

@Component({
    selector   : 'SMSF-theme-options',
    templateUrl: './theme-options.component.html',
    styleUrls  : ['./theme-options.component.scss']
})
export class SMSFThemeOptionsComponent implements OnInit, OnDestroy
{
    @ViewChild('openButton') openButton;
    @ViewChild('panel') panel;

    public player: AnimationPlayer;
    smsfSettings: any;

    onSettingsChanged: Subscription;

    constructor(
        private animationBuilder: AnimationBuilder,
        private smsfConfig: SMSFConfigService
    )
    {
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

    onSettingsChange()
    {
        this.smsfConfig.setSettings(this.smsfSettings);
    }

    closeBar()
    {
        this.player =
            this.animationBuilder
                .build([
                    style({transform: 'translate3d(0,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(100%,0,0)'}))
                ]).create(this.panel.nativeElement);
        this.player.play();
    }

    openBar()
    {
        this.player =
            this.animationBuilder
                .build([
                    style({transform: 'translate3d(100%,0,0)'}),
                    animate('400ms ease', style({transform: 'translate3d(0,0,0)'}))
                ]).create(this.panel.nativeElement);
        this.player.play();
    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }
}
