import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExternalComponent } from './external/external.component';
import { InternalComponent } from './internal/internal.component';
import { InternalRoutingModule } from './internal/internal-routing.module';
import { ExternalRoutingModule } from './external/external-routing.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    declarations: [ExternalComponent, InternalComponent, HeaderComponent],
    imports: [
        CommonModule,
        RouterModule,
        InternalRoutingModule,
        ExternalRoutingModule
    ]
})
export class LayoutsModule { }
