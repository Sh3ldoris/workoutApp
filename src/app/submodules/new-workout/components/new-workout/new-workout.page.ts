import { Component } from '@angular/core';
import { HeaderService } from '../../../../common/services/header.service';

@Component({
    selector: 'app-new-workout',
    templateUrl: './new-workout.page.html',
    styleUrls: ['./new-workout.page.scss'],
})
export class NewWorkoutPage {
    constructor(private headerService: HeaderService) {}

    ionViewWillEnter(): void {
        this.headerService.resetHeader();
        this.headerService.setBackButton(true);
        this.headerService.setBackLocation({
            url: 'workout',
        });
        this.headerService.showHeader();
    }
}
