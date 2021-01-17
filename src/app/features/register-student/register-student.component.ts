import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-register-student',
    templateUrl: './register-student.component.html',
    styleUrls: ['./register-student.component.scss']
})
export class RegisterStudentComponent implements OnInit {

    public formGroup: FormGroup;
    emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.buildForm();
    }

    private buildForm() {

        this.formGroup = this.formBuilder.group({
            idStudent:
            ['', [
                Validators.required
            ]],
            nameStudent:
            ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15),
            ]],
            lastNameStudent:
            ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15),
            ]],
            grade:
            ['', [
                Validators.required
            ]],
            tipe:
            ['', [
                Validators.required
            ]],
            idGuardian:
            ['', [
                Validators.required
            ]],
            nameGuardian:
            ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15),
            ]],
            lastNameGuardian:
            ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15),
            ]],
            cell:
            ['', [
                Validators.required,
                Validators.minLength(3),
            ]],
            email:
            ['', [
                Validators.required,
                Validators.pattern(this.emailPattern)
            ]],
        });
    }
}
