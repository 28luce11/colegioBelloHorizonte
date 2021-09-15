import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExternalComponent } from './layouts/external/external.component';
import { InternalComponent } from './layouts/internal/internal.component';


const routes: Routes = [
  {
    path: 'internal',
    component: InternalComponent,
    children: [
        {
            path: 'home',
            loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
        },
    ]
},
{
    path: 'external',
    component: ExternalComponent,
    children: [
        {
            path: 'login',
            loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
        }
    ]
},
{
    path: '**',
    redirectTo: 'internal/home',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
