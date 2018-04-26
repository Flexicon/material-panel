import { Component, OnDestroy, OnInit } from '@angular/core';
import 'rxjs/add/operator/takeUntil';

import { PostsService } from '@app/core/services';
import { PostModel } from '@app/core/models';
import { Subject } from 'rxjs/Subject';

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
        private postsService: PostsService
    ) {
    }

    ngOnInit() {
        this.loading++;
        this.postsService.getPosts()
            .takeUntil(this.unsubscribe)
            .subscribe(
                posts => {
                    this.loading--;
                    this.posts = posts;
                }, err => {
                    this.loading--;
                }
            );
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
