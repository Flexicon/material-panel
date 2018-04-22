import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <mat-toolbar color="primary">
            <a mat-button routerLink="/">Link</a>
        </mat-toolbar>`,
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
