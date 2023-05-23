import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    constructor(private storage: Storage) {
        this.storage.create();
    }

    getSomeData() {
        return this.storage.get('HEJ') || [];
    }

    async addData(data: any) {
        const storedData = (await this.storage.get('HEJ')) || [];
        storedData.push(data);
        return this.storage.set('HEJ', storedData);
    }
}
