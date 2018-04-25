import { Component, OnInit } from '@angular/core';

import { sample } from 'lodash';

import { emojis } from './emojis';

@Component({
    selector: 'app-home',
    template: `
        <div class="home">
            <div class="home-emoji">
                {{ currentEmoji }}
            </div>
            <div class="home-message">
                Choose a category...
            </div>
        </div>
    `,
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    currentEmoji: string;

    constructor() {
    }

    ngOnInit() {
        this.currentEmoji = sample(emojis);
    }

}
