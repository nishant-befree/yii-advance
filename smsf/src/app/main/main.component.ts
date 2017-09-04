import { Component, ElementRef, HostBinding, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SMSFConfigService } from '../core/services/config.service';

@Component({
    selector     : 'smsf-main',
    templateUrl  : './main.component.html',
    styleUrls    : ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SMSFMainComponent implements OnInit, OnDestroy
{
    onSettingsChanged: Subscription;
    smsfSettings: any;
    @HostBinding('class.disable-perfect-scrollbar') disableCustomScrollbars;

    constructor(
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        private SMSFConfig: SMSFConfigService
    )
    {
        this.onSettingsChanged =
            this.SMSFConfig.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.smsfSettings = newSettings;
                        this.disableCustomScrollbars = !this.smsfSettings.customScrollbars;
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

    addClass(className: string)
    {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    }

    removeClass(className: string)
    {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    }
}
