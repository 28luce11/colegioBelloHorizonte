import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalComponent } from './external/external.component';
import { InternalComponent } from './internal/internal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ExternalComponent, InternalComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
