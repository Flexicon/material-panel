import { UserModel } from '@app/core/models/user.model';

export interface PostModel {
    id: number;
    userId: number;
    user: UserModel;
    title: string;
    body: string;
    likes: number;
    liked: boolean;
    shares: number;
    shared: boolean;
}
