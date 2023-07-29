import { Component } from '@angular/core';
import { ExampleDto } from '../../../../home/object/example.interface';
import { StorageService } from '../../../../common/services/storage.service';
import { HeaderService } from '../../../../common/services/header.service';
import { MainRoute } from '../../../../common/enums/route.enum';

@Component({
    selector: 'app-plan-list',
    templateUrl: 'plan-list.component.html',
    styleUrls: ['plan-list.component.scss'],
})
export class PlanListComponent {
    examples: ExampleDto[];

    protected readonly mainRoute = MainRoute;

    constructor(private storage: StorageService, private headerService: HeaderService) {
        console.warn('Workouts');
    }

    ionViewWillEnter(): void {
        this.headerService.resetHeader();
        this.headerService.setLabel('WORKOUTS.HEADER');
        this.headerService.setBackButton(true);
        this.headerService.showHeader();
    }
}
