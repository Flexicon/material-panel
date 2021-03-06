import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(
        private notifications: NotificationsService
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).catch((response: HttpResponse<any>) => {
            const errorMsg = `API Error: ${response.status}: ${response.statusText}`;
            this.notifications.error('An error has occurred', errorMsg);
            return Observable.throw(response);
        });
    }
}
