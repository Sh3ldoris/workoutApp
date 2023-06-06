import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanListComponent } from './component/plan-list/plan-list.component';

const routes: Routes = [
    {
        path: '',
        component: PlanListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GymPlanRoutingModule {}