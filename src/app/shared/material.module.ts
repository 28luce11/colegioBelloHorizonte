import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
