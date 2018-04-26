import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { CryptoModel } from '@app/core/models';
import { CryptoService } from '@app/core/services';
import { Subject } from 'rxjs/Subject';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent } from '@angular/material';

@Component({
    selector: 'app-crypto',
    templateUrl: './crypto.component.html',
    styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit, OnDestroy, AfterViewInit {
    private unsubscribe = new Subject<void>();
    loading = 0;
    coins: CryptoModel[];
    displayedColumns = ['rank', 'name', 'price_usd', 'price_btc'];
    dataSource: MatTableDataSource<CryptoModel>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private cryptoService: CryptoService
    ) {
    }

    ngOnInit() {
        this.loading++;
        this.coins = [];
        this.dataSource = new MatTableDataSource(this.coins);

        const storedPageSize = localStorage.getItem('crypto_pagesize');
        this.paginator.pageSize = storedPageSize ? +storedPageSize : 5;

        this.paginator.page.subscribe((pageEvent: PageEvent) => {
            localStorage.setItem('crypto_pagesize', '' + pageEvent.pageSize);
        });
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        this.cryptoService.getCoins()
            .takeUntil(this.unsubscribe)
            .subscribe(coins => {
                this.loading--;
                this.dataSource.data = coins;
            }, err => {
                this.loading--;
            });
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

}
