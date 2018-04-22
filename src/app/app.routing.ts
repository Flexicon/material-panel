import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from '@app/features';
import { HomeComponent } from '@app/shared';
import { PhotosComponent } from '@app/features/photos/photos.component';
import { CryptoComponent } from '@app/features/crypto/crypto.component';
import { UsersComponent } from '@app/features/users/users.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'posts', component: PostsComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'users', component: UsersComponent },
    { path: 'crypto', component: CryptoComponent },
];

export const AppRouting = RouterModule.forRoot(routes);
