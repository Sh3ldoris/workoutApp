import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainRoute } from './common/enums/route.enum';

const routes: Routes = [
    {
        path: '',
        redirectTo: MainRoute.WORKOUT,
        pathMatch: 'full',
    },
    {
        path: MainRoute.HOME,
        loadChildren: () => import('./submodules/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: MainRoute.WORKOUT,
        loadChildren: () => import('./submodules/workout/workout.module').then((m) => m.WorkoutModule),
    },
    { path: '**', redirectTo: MainRoute.HOME },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
