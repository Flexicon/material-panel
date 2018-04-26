import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from '@app/features';
import { HomeComponent } from '@app/shared/components';
import { CryptoComponent } from '@app/features/crypto/crypto.component';
import { UsersComponent } from '@app/features/users/users.component';
import { UserDetailsComponent } from '@app/features/users/user-details/user-details.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'posts', component: PostsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'crypto', component: CryptoComponent },
];

export const AppRouting = RouterModule.forRoot(routes);
