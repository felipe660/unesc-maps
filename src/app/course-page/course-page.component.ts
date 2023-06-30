import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterCourseService } from '../register-teacher/register-course.service';
import { RegisterDisciplineService } from '../register-teacher/register-discipline.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {

  formCourse: any = {
    name: null,
  };

  courseId: any;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor
  (
    private router: Router,
    private registerCourseService: RegisterCourseService,
    private registerDisciplineService: RegisterDisciplineService
  ) { }

  ngOnInit(): void {
    this.getCourse();
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

  onSubmitCourse(): void {
    const dto = this.formCourse;
    console.log(dto)

    this.registerCourseService.saveOrUpdate(dto).subscribe(
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

  deleteDisc(id: any): void {
    this.registerCourseService.delete(id).subscribe(
      response => {
        console.log(response);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  goBack():void{
    this.router.navigate(['/']);
  }

  changeStatus(): void {
    this.formCourse = {
      name: null,
    };
    this.isSuccessful = false;
  }

}
