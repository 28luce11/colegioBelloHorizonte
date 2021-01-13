import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideRoutes, RouterModule } from '@angular/router';

import { ExternalComponent } from './external/external.component';
import { InternalComponent } from './internal/internal.component';
import { InternalRoutingModule } from './internal/internal-routing.module';
import { ExternalRoutingModule } from './external/external-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderExternalComponent } from './components/header-external/header-external.component';

@NgModule({
    declarations:
    [
        ExternalComponent,
        InternalComponent,
        HeaderComponent,
        HeaderExternalComponent
    ],
    imports:
    [
        CommonModule,
        RouterModule,
        InternalRoutingModule,
        ExternalRoutingModule,
        SharedModule
    ],
    exports:
    [
        ExternalComponent,
        InternalComponent,
    ]
})
export class LayoutsModule { }
