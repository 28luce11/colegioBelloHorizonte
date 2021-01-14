import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
