import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    notificationConfig = {
        timeOut: 5000,
        position: ['top', 'right'],
        animate: 'scale',
    };

    constructor() {
    }
}
