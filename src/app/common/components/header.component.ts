import { Component } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BackLocation } from '../objects/back-location.model';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
})
export class HeaderComponent {
    backLocation$: Observable<BackLocation | null> = this.headerService.getBackLocation();
    isBackButtonVisible$: Observable<boolean> = this.headerService.isBackButton();
    isHeaderVisible$: Observable<boolean> = this.headerService.isHeaderVisible();
    headerLabel$: Observable<string> = this.headerService.getLabel();
    constructor(private headerService: HeaderService, private router: Router) {}

    goBack(location: BackLocation): void {
        this.router.navigate([location.url]);
    }
}
