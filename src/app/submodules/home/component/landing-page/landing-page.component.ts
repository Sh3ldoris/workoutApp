import { AfterViewInit, Component } from '@angular/core';
import { MainRoute } from '../../../../common/enums/route.enum';

@Component({
    selector: 'app-landing-page',
    templateUrl: 'landing-page.component.html',
    styleUrls: ['landing-page.component.scss'],
})
export class LandingPageComponent implements AfterViewInit {
    mainRout = MainRoute;
    ngAfterViewInit(): void {}

    protected readonly MainRoute = MainRoute;
}
