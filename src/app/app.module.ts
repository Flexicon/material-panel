import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from '@app/app.component';
import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';
import {
    HeaderComponent,
    ContentComponent,
    MenuComponent,
    PostsComponent,
    PhotosComponent,
    CryptoComponent,
    UsersComponent
} from '@app/features';
import { AppRouting } from '@app/app.routing';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        MenuComponent,
        PostsComponent,
        PhotosComponent,
        CryptoComponent,
        UsersComponent
    ],
    imports: [
        BrowserModule,
        AppRouting,
        BrowserAnimationsModule,
        SimpleNotificationsModule.forRoot(),
        CoreModule,
        SharedModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
