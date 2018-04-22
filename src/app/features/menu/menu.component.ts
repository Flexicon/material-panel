import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `
        <mat-card>
            <mat-nav-list>
                <h2 mat-subheader>Menu</h2>
                <a mat-list-item routerLink="/posts" routerLinkActive="active">
                    <mat-icon mat-list-icon>note</mat-icon> Posts
                </a>
                <a mat-list-item routerLink="/photos" routerLinkActive="active">
                    <mat-icon mat-list-icon>photo_album</mat-icon> Photos
                </a>
                <a mat-list-item routerLink="/crypto" routerLinkActive="active">
                    <mat-icon mat-list-icon>attach_money</mat-icon> Crypto
                </a>
                <a mat-list-item routerLink="/users" routerLinkActive="active">
                    <mat-icon mat-list-icon>people</mat-icon> Users
                </a>
            </mat-nav-list>
        </mat-card>
    `,
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
