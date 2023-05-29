import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './component/landing-page/landing-page.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
    declarations: [LandingPageComponent],
})
export class HomeModule {}
