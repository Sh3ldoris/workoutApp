import { AfterViewInit, Component } from '@angular/core';
import { ExampleDto } from '../../../../home/object/example.interface';
import { StorageService } from '../../../../common/services/storage.service';
import { HeaderService } from '../../../../common/services/header.service';

@Component({
    selector: 'app-plan-list',
    templateUrl: 'plan-list.component.html',
    styleUrls: ['plan-list.component.scss'],
})
export class PlanListComponent implements AfterViewInit {
    examples: ExampleDto[];

    constructor(private storage: StorageService, private headerService: HeaderService) {
        console.warn('Workouts');
    }

    ngAfterViewInit(): void {
        this.headerService.setLabel('Workouts list');
        this.headerService.showHeader();
    }
}
