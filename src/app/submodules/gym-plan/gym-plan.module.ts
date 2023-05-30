import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GymPlanRoutingModule } from './gym-plan-routing.module';
import { PlanListComponent } from './component/plan-list/plan-list.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, GymPlanRoutingModule],
    declarations: [PlanListComponent],
})
export class GymPlanModule {}
