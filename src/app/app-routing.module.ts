import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExternalComponent } from './layouts/external/external.component';
import { InternalComponent } from './layouts/internal/internal.component';


const routes: Routes = [
    {
        path: '**',
        redirectTo: 'internal/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
