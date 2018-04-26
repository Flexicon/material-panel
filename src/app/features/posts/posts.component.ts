import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { map, find } from 'lodash';

import { PostsService, UsersService } from '@app/core/services';
import { PostModel } from '@app/core/models';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
    private unsubscribe = new Subject<void>();
    public posts: PostModel[];
    public loading = 0;

    constructor(
        private postsService: PostsService,
        private usersService: UsersService
    ) {
    }

    ngOnInit() {
        this.loading++;
        const posts$ = this.postsService.getPosts();
        const users$ = this.usersService.getUsers();

        combineLatest(posts$, users$).takeUntil(this.unsubscribe)
            .subscribe(([posts, users]) => {
                this.posts = map(posts, post => {
                    post.user = find(users, user => user.id === post.userId);
                    return post;
                });
                this.loading--;
            }, err => {
                this.loading--;
            });
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    togglePostLike(post: PostModel): void {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
    }

    togglePostShare(post: PostModel): void {
        post.shared = !post.shared;
        post.shares += post.shared ? 1 : -1;
    }

}
