import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PlanListComponent } from './component/plan-list/plan-list.component';

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule],
    declarations: [PlanListComponent],
})
export class WorkoutModule {}
