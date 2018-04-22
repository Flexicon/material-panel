import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from '@app/app.component';
import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';
import { ContentComponent } from '@app/features/content/content.component';
import { MenuComponent } from './features/menu/menu.component';
import { AppRouting } from '@app/app.routing';
import { PostsComponent } from './features/posts/posts.component';
import { PhotosComponent } from './features/photos/photos.component';
import { CryptoComponent } from './features/crypto/crypto.component';
import { UsersComponent } from './features/users/users.component';


@NgModule({
    declarations: [
        AppComponent,
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
