import { Component, OnInit } from '@angular/core';
import { RegisterClassService } from './register-class.service';
import { RegisterCourseService } from './register-course.service';
import { RegisterDisciplineService } from './register-discipline.service';
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
  formClass: any = {
    name: null,
    observation:null,
    latitude: null,
    longitude: null
  };

  formDiscipline: any = {
    name: null,
    classroom: null,
    course:null,
    day: null,
    teacher: null,
    starting_time: null,
    final_time: null
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor
  (
    private registerTeacherService: RegisterTeacherService,
    private registerClassService: RegisterClassService,
    private registerCourseService: RegisterCourseService,
    private registerDisciplineService: RegisterDisciplineService
  ) { }

  ngOnInit(): void {
    this.getTeachers();
    this.getClass();
    this.getCourse();
    this.getDisciplines();
  }

  getDisciplines(): void {
    this.registerDisciplineService.get().subscribe(
      data => {
        console.log(data);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
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

  getClass(): void {
    this.registerClassService.get().subscribe(
      data => {
        console.log(data);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  getCourse(): void {
    this.registerCourseService.get().subscribe(
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

  onSubmitDiscipline(): void {
    const dto = this.formDiscipline;
    console.log(dto)

    this.registerDisciplineService.saveOrUpdate(dto).subscribe(
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

  onSubmitCourse(): void {}

  onSubmitClass(): void {
    const dto = this.formClass;
    console.log(dto);
    this.registerClassService.saveOrUpdate(dto).subscribe(
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

}
