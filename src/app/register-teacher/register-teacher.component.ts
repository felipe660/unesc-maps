import { Component, OnInit } from '@angular/core';
import { RegisterTeacherService } from './register-teacher.service';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.scss']
})
export class RegisterTeacherComponent implements OnInit {

  form: any = {
    name: null,
  };
  formCourse: any = {
    name: null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private registerTeacherService: RegisterTeacherService) { }

  ngOnInit(): void {
    this.getTeachers();
  }

  getTeachers(): void {
    this.registerTeacherService.get().subscribe(
      data => {
        console.log(data);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  onSubmit(): void {
    // const { id, username, email, password } = this.form;

    const dto = this.form;
    console.log(dto)

    this.registerTeacherService.saveOrUpdate(dto).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  onSubmitCourse(): void {
    // const { username, email, password } = this.formCourse;
    // console.log(username);

    // this.authService.register(username, email, password).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
  }

}
