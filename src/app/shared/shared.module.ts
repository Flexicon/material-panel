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

import { HomeComponent, LoaderComponent } from '@app/shared/components';

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
