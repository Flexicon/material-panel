import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { sampleSize } from 'lodash';

import { environment } from '@env/environment';
import { PostModel } from '@app/core/models';

@Injectable()
export class PostsService {
    private baseUrl: string;

    constructor(
        private http: HttpClient
    ) {
        this.baseUrl = environment.api.typicode + '/posts';
    }

    static mapPostModel(postData: any): PostModel {
        const post: PostModel = { ...postData };
        // random likes and shares for some extra functionality
        post.likes = Math.floor(Math.random() * 100);
        post.shares = Math.floor(Math.random() * 100);
        // also deciding if we liked / shared the post already
        post.liked = Math.random() > 0.7;
        post.shared = Math.random() > 0.7;

        return post;
    }

    public getPosts(): Observable<PostModel[]> {
        return this.http.get(this.baseUrl)
            .map((res: Object[]) => sampleSize(res, 20)) // 20 random posts from the 100 we get from the placeholder api
            .map((res: Object[]) => res.map(PostsService.mapPostModel));
    }
}
