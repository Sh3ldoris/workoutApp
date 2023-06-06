import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainRoute } from '../../common/enums/route.enum';
import { HeaderService } from '../../common/services/header.service';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
    selector: 'app-landing-page',
    templateUrl: 'landing-page.component.html',
    styleUrls: ['landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
    @ViewChild('actions', { read: ElementRef, static: true }) actions: ElementRef;
    @ViewChild('welcome', { read: ElementRef, static: true }) welcome: ElementRef;

    mainRout = MainRoute;

    constructor(private headerService: HeaderService, private animationCtrl: AnimationController) {}

    ngOnInit(): void {
        const actionsAnimation: Animation = this.animationCtrl
            .create()
            .addElement(this.actions.nativeElement)
            .duration(500)
            .fromTo('transform', 'translateY(100%)', 'translateY())');

        const welcomeAnimation: Animation = this.animationCtrl
            .create()
            .addElement(this.welcome.nativeElement)
            .duration(500)
            .fromTo('transform', 'translateY(-100%)', 'translateY())');

        actionsAnimation.play();
        welcomeAnimation.play();
    }

    ionViewWillEnter(): void {
        this.headerService.hideHeader();
    }
}
