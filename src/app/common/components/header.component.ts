import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
})
export class HeaderComponent implements OnInit {
    isHeaderVisible: Observable<boolean> = this.headerService.isHeaderVisible();
    headerLabel: Observable<string> = this.headerService.getLabel();

    constructor(private headerService: HeaderService) {}

    ngOnInit(): void {
        console.warn('Header init');
    }
}
