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

    constructor(private headerService: HeaderService) {
        console.warn('Workouts');
    }

    ngAfterViewInit(): void {
        this.headerService.showHeader();
        // this.loadData();
    }

    /*addData(): void {
        this.storage.addExample({ label: 'label', description: 'description' });
        this.loadData();
    }

    private loadData(): void {
        this.storage.getExamples().subscribe((examples: ExampleDto[]) => (this.examples = examples));
    }*/
}
