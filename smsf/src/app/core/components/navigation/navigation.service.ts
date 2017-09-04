import { EventEmitter, Injectable } from '@angular/core';
import { SMSFNavigation } from '../../../navigation.model';

@Injectable()
export class SMSFNavigationService
{
    onNavCollapseToggled = new EventEmitter<any>();
    navigation: any[];
    flatNavigation: any[] = [];

    constructor()
    {
        this.navigation = new SMSFNavigation().items;
    }

    /**
     * Get navigation array
     * @returns {any[]}
     */
    getNavigation()
    {
        return this.navigation;
    }

    /**
     * Get flattened navigation array
     * @param navigationItems
     * @returns {any[]}
     */
    getFlatNavigation(navigationItems?)
    {
        if ( !navigationItems )
        {
            navigationItems = this.navigation;
        }

        for ( const navItem of navigationItems )
        {
            if ( navItem.type === 'subheader' )
            {
                continue;
            }

            if ( navItem.type === 'nav-item' )
            {
                this.flatNavigation.push({
                    title: navItem.title,
                    type : navItem.type,
                    icon : navItem.icon || false,
                    url  : navItem.url
                });

                continue;
            }

            if ( navItem.type === 'nav-collapse' )
            {
                this.getFlatNavigation(navItem.children);
            }
        }

        return this.flatNavigation;
    }
}
