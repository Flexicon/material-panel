import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatToolbarModule, MatSidenavModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
    ],
    declarations: [],
    exports: [
        FlexLayoutModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
    ]
})
export class SharedModule {
}
