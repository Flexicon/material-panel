import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '@app/core/services';
import { UserModel } from '@app/core/models';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
    private unsubscribe = new Subject<void>();
    users: UserModel[];
    loading = 0;

    constructor(
        private usersService: UsersService
    ) {
    }

    ngOnInit() {
        this.loading++;
        this.usersService.getUsers()
            .takeUntil(this.unsubscribe)
            .subscribe(
                users => {
                    this.loading--;
                    this.users = users;
                }, err => {
                    this.loading--;
                }
            );
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
