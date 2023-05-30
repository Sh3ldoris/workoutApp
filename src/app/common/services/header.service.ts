import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HeaderService {
    private isVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private headerLabel: BehaviorSubject<string> = new BehaviorSubject<string>('');

    isHeaderVisible(): Observable<boolean> {
        return this.isVisible;
    }

    showHeader(): void {
        this.isVisible.next(true);
    }

    hideHeader(): void {
        this.isVisible.next(false);
    }

    setLabel(label: string): void {
        this.headerLabel.next(label);
    }

    getLabel(): Observable<string> {
        return this.headerLabel;
    }
}
