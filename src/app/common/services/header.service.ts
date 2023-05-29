import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HeaderService {
    private isVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    isHeaderVisible(): Observable<boolean> {
        return this.isVisible;
    }

    showHeader(): void {
        this.isVisible.next(true);
    }
}
