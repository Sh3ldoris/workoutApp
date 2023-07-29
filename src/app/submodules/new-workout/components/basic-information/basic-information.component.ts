import { Component } from '@angular/core';
import { HeaderService } from '../../../../common/services/header.service';

@Component({
    selector: 'app-basic-information',
    templateUrl: './basic-information.component.html',
    styleUrls: ['./basic-information.component.scss'],
})
export class BasicInformationComponent {
    constructor(private headerService: HeaderService) {}
}
