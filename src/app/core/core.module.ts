import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CryptoService, PostsService, UsersService } from '@app/core/services';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [],
    providers: [
        PostsService,
        UsersService,
        CryptoService,
    ]
})
export class CoreModule {
}
