import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { registerStudentConstants } from 'src/app/shared/constants/register-student.constants';

@Component({
    selector: 'app-register-student',
    templateUrl: './register-student.component.html',
    styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {
    formRegisterStudent: FormGroup;
    readonly formNames = registerStudentConstants.formNames;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.buildForm();
    }

    private buildForm() {
        this.formRegisterStudent = this.formBuilder.group({
            [this.formNames.id]: new FormControl('', [
                Validators.required
            ]),
            [this.formNames.name]: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15),
            ]),
            [this.formNames.lastName]: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15),
            ]),
            [this.formNames.grade]: new FormControl('', [
                Validators.required
            ]),
            [this.formNames.tipe]: new FormControl('', [
                Validators.required
            ]),
            [this.formNames.idGuardian]: new FormControl('', [
                Validators.required
            ]),
            [this.formNames.nameGuardian]: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15),
            ]),
            [this.formNames.lastNameGuardian]: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15),
            ]),
            [this.formNames.phoneNumber]: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
            ]),
            [this.formNames.email]: new FormControl('', [
                Validators.required,
                Validators.pattern(registerStudentConstants.emailPattern)
            ]),
        });
    }

    send(value) {
        console.log(value);
    }

}
