import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewWorkoutPageRoutingModule } from './new-workout-routing.module';

import { NewWorkoutPage } from './components/new-workout/new-workout.page';
import { TranslateModule } from '@ngx-translate/core';
import { BasicInformationComponent } from './components/basic-information/basic-information.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, NewWorkoutPageRoutingModule, TranslateModule],
    declarations: [NewWorkoutPage, BasicInformationComponent],
})
export class NewWorkoutPageModule {}
