import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BackLocation } from '../objects/back-location.model';

@Injectable({
    providedIn: 'root',
})
export class HeaderService {
    private backLocation: BehaviorSubject<BackLocation | null> = new BehaviorSubject<BackLocation | null>(null);
    private isBackButtonVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private isVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private headerLabel: BehaviorSubject<string> = new BehaviorSubject<string>('');

    resetHeader(): void {
        this.backLocation.next(null);
        this.isBackButtonVisible.next(false);
        this.isVisible.next(false);
        this.headerLabel.next('');
    }

    isBackButton(): Observable<boolean> {
        return this.isBackButtonVisible;
    }

    setBackButton(visible: boolean): void {
        this.isBackButtonVisible.next(visible);
    }

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

    setBackLocation(location: BackLocation): void {
        this.backLocation.next(location);
    }

    getBackLocation(): Observable<BackLocation | null> {
        return this.backLocation;
    }
}
