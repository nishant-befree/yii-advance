import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<app-main-navigation></app-main-navigation>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.css']
})
export class AppComponent {

}
