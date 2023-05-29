import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BehaviorSubject, filter, from, Observable, of, switchMap } from 'rxjs';
import { ExampleDto } from '../../home/object/example.interface';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private storageReady$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(private storage: Storage) {
        this.initStorage();
    }

    async initStorage(): Promise<void> {
        console.warn('INIT');
        await this.storage.defineDriver(CordovaSQLiteDriver);
        await this.storage.create();
        this.storageReady$.next(true);
        console.warn('DONE');
    }

    getExamples(): Observable<ExampleDto[]> {
        return this.storageReady$.pipe(
            filter((isReady: boolean) => isReady),
            switchMap(() => {
                console.warn('Returning data');
                return from(this.storage.get('HEJ')) || of([]);
            })
        );
    }

    addExample(example: ExampleDto): void {
        this.storage.get('HEJ').then((data: ExampleDto[]) => {
            this.storage.set('HEJ', [...(data || []), example]);
        });
    }
}
