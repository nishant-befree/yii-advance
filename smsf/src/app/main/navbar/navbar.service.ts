import { Injectable } from '@angular/core';

@Injectable()
export class SMSFNavbarService
{
    navBarRef;

    constructor()
    {
    }

    setNavBar(ref)
    {
        this.navBarRef = ref;
    }

    getNavBar()
    {
        return this.navBarRef;
    }
}
