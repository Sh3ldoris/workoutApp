import { Component } from '@angular/core';
import { ExampleDto } from '../../../../home/object/example.interface';
import { StorageService } from '../../../../common/services/storage.service';
import { HeaderService } from '../../../../common/services/header.service';

@Component({
    selector: 'app-plan-list',
    templateUrl: 'plan-list.component.html',
    styleUrls: ['plan-list.component.scss'],
})
export class PlanListComponent {
    examples: ExampleDto[];

    constructor(private storage: StorageService, private headerService: HeaderService) {
        console.warn('Workouts');
    }

    ionViewWillEnter(): void {
        this.headerService.setLabel('WORKOUTS.HEADER');
        this.headerService.showHeader();
    }
}
