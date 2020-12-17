import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternalComponent } from './internal.component';

const routes: Routes = [
    {
        path: 'internal',
        component: InternalComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule),
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InternalRoutingModule { }
