import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExternalComponent } from './external.component';

const routes: Routes = [
    {
        path: 'external',
        component: ExternalComponent,
        children: [
            {
                path: 'login',
                loadChildren: () => import('../../features/login/login.module').then(m => m.LoginModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExternalRoutingModule { }
