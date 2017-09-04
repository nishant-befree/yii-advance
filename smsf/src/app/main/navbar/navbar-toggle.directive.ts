import { Directive, HostListener, Input } from '@angular/core';
import { SMSFNavbarService } from './navbar.service';
import { SMSFNavbarComponent } from './navbar.component';

@Directive({
    selector: '[smsfNavbar]'
})
export class SMSFNavbarToggleDirective
{
    @Input() smsfNavbar: string;
    navbar: SMSFNavbarComponent;

    constructor(private navbarService: SMSFNavbarService)
    {
    }

    @HostListener('click')
    onClick()
    {
        this.navbar = this.navbarService.getNavBar();

        if ( !this.navbar[this.smsfNavbar] )
        {
            return;
        }

        this.navbar[this.smsfNavbar]();
    }
}
