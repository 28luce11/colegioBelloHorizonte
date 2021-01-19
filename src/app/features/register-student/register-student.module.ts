import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegisterStudentRoutingModule } from './register-student-routing.module';
import { RegisterStudentComponent } from './register-student.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegisterStudentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RegisterStudentRoutingModule,
    SharedModule,
  ]
})
export class RegisterStudentModule { }
