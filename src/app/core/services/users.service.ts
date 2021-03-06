import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '@env/environment';
import { UserModel } from '@app/core/models';

@Injectable()
export class UsersService {
    private baseUrl: string;

    constructor(
        private http: HttpClient
    ) {
        this.baseUrl = environment.api.typicode + '/users';
    }

    public getUsers(): Observable<UserModel[]> {
        return this.http.get<UserModel[]>(this.baseUrl);
    }

    public getUser(id: number): Observable<UserModel> {
        return this.http.get<UserModel>(`${this.baseUrl}/${id}`);
    }
}
