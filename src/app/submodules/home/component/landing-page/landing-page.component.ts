import { Component } from '@angular/core';
import { MainRoute } from '../../../../common/enums/route.enum';
import { HeaderService } from '../../../../common/services/header.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: 'landing-page.component.html',
    styleUrls: ['landing-page.component.scss'],
})
export class LandingPageComponent {
    mainRout = MainRoute;

    constructor(private headerService: HeaderService) {}

    ionViewWillEnter(): void {
        this.headerService.hideHeader();
    }
}
