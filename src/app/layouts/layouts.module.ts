import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalComponent } from './external/external.component';
import { InternalComponent } from './internal/internal.component';
import { RouterModule } from '@angular/router';
import { InternalRoutingModule } from './internal/internal-routing.module';
import { ExternalRoutingModule } from './external/external-routing.module';
@NgModule({
    declarations: [ExternalComponent, InternalComponent],
    imports: [
        CommonModule,
        RouterModule,
        InternalRoutingModule,
        ExternalRoutingModule
    ]
})
export class LayoutsModule { }
