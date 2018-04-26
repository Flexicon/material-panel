import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { AvatarModule } from 'ngx-avatar';

import { AppComponent } from '@app/app.component';
import { SharedModule } from '@app/shared';
import { CoreModule } from '@app/core';
import {
    HeaderComponent,
    ContentComponent,
    MenuComponent,
    PostsComponent,
    CryptoComponent,
    UsersComponent,
    UserDetailsComponent
} from '@app/features';
import { AppRouting } from '@app/app.routing';
import { ApiInterceptor } from '@app/core/interceptors';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        MenuComponent,
        PostsComponent,
        CryptoComponent,
        UsersComponent,
        UserDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRouting,
        BrowserAnimationsModule,
        SimpleNotificationsModule.forRoot(),
        CoreModule,
        SharedModule,
        AvatarModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
