import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule
} from '@angular/material';

import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatProgressSpinnerModule,
    ],
    declarations: [HomeComponent, LoaderComponent],
    exports: [
        LoaderComponent,
        FlexLayoutModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatProgressSpinnerModule,
    ]
})
export class SharedModule {
}
