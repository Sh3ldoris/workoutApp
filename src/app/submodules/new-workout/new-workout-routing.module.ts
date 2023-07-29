import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewWorkoutPage } from './components/new-workout/new-workout.page';
import { BasicInformationComponent } from './components/basic-information/basic-information.component';

const routes: Routes = [
    {
        path: '',
        component: NewWorkoutPage,
        children: [
            {
                path: 'basic-info',
                component: BasicInformationComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewWorkoutPageRoutingModule {}
