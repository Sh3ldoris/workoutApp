import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainRoute } from './common/enums/route.enum';

const routes: Routes = [
    {
        path: MainRoute.HOME,
        loadChildren: () => import('./submodules/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: MainRoute.WORKOUT,
        loadChildren: () => import('./submodules/gym-plan/gym-plan.module').then((m) => m.GymPlanModule),
    },
    {
        path: 'new-workout',
        loadChildren: () => import('./submodules/new-workout/new-workout.module').then((m) => m.NewWorkoutPageModule),
    },
    {
        path: '',
        redirectTo: MainRoute.HOME,
        pathMatch: 'full',
    },
    { path: '**', redirectTo: MainRoute.HOME },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
