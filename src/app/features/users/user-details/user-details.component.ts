import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { UsersService } from '@app/core/services';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '@app/core/models';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
    private unsubscribe = new Subject<void>();
    loading = 0;
    user: UserModel;

    constructor(
        private usersService: UsersService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.loading++;
        this.route.params.subscribe(params => {
            this.usersService.getUser(+params.id)
                .takeUntil(this.unsubscribe)
                .subscribe(user => {
                    this.loading--;
                    this.user = user;
                }, err => {
                    this.loading--;
                });
        });
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

}
