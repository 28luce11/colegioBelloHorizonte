import { NgModule } from '@angular/core';

import { RegisterStudentRoutingModule } from './register-student-routing.module';
import { RegisterStudentComponent } from './register-student.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RegisterStudentComponent],
  imports: [
    RegisterStudentRoutingModule,
    SharedModule,
  ]
})
export class RegisterStudentModule { }
