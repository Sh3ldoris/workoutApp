import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, TranslateModule],
    declarations: [LandingPageComponent],
})
export class HomeModule {}
