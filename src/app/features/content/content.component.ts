import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-content',
    template: `
        <div fxLayout="row" fxLayout.xs="column" fxLayoutGap.gt-xs="1rem">
            <div class="side">
                <app-menu></app-menu>
            </div>
            <div class="content">
                <router-outlet></router-outlet>
            </div>
        </div>
    `,
    styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
