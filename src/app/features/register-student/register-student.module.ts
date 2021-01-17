import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterStudentRoutingModule } from './register-student-routing.module';
import { RegisterStudentComponent } from './register-student.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [RegisterStudentComponent],
  imports: [
    CommonModule,
    RegisterStudentRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RegisterStudentModule { }
