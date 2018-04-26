import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '@env/environment';
import { CryptoModel } from '@app/core/models';

@Injectable()
export class CryptoService {
    private baseUrl: string;

    constructor(
        private http: HttpClient
    ) {
        this.baseUrl = environment.api.crypto;
    }

    public getCoins(): Observable<CryptoModel[]> {
        return this.http.get<CryptoModel[]>(this.baseUrl);
    }

}
