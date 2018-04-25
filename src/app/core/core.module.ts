import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PostsService } from '@app/core/services';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [],
    providers: [
        PostsService
    ]
})
export class CoreModule {
}
