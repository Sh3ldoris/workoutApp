import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/home.component';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
    declarations: [HomeComponent],
})
export class HomePageModule {}
