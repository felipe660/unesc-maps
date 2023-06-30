import { RegisterDisciplineService } from './../register-teacher/register-discipline.service';
import { ArrayDayPipe } from './../components/pipes/array-day.pipe';
import { ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import turmas from '../components/enums/turmas.json'
import { Subscription } from 'rxjs';
import { RegisterTeacherService } from '../register-teacher/register-teacher.service';
import { RegisterClassService } from '../register-teacher/register-class.service';
import { RegisterCourseService } from '../register-teacher/register-course.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  filtro: string = '';
  routeSub: Subscription;
  refs: any;
  days: any = [
    { id: 1, name: 'Segunda-feira' },
    { id: 2, name: 'Terça-feira' },
    { id: 3, name: 'Quarta-feira' },
    { id: 4, name: 'Quinta-feira' },
    { id: 5, name: 'Sexta-feira' },
    { id: 6, name: 'Sábado' },
    { id: 7, name: 'Domingo' },
  ]

  // pagination
  currentIndex = 1;
  title = '';

  page = 1;
  pageSize = 5;
  pageSizes = [5, 10, 20];
  errorMessage: any;
  isSignUpFailed: boolean;
  isSuccessful = false;
  professor: any;
  discipline: any = [{}];
  selectDiscipline: any;
  modalRef: NgbModalRef;

  hasAutorization: boolean = true;

  formDiscipline: any = {
    _id: null,
    name: null,
    classroom: null,
    course:null,
    day: null,
    teacher: null,
    starting_time: null,
    final_time: null
  };
  class: any;
  course: any;
  teachers: any;

  constructor(
    private router: Router,
    private route :ActivatedRoute,
    private modalService: NgbModal,
    public registerTeacherService: RegisterTeacherService,
    public registerDisciplineService: RegisterDisciplineService,
    public registerClassService: RegisterClassService,
    private registerCourseService: RegisterCourseService
  ) { }
 
  ngOnInit(): void {
    this.getDisciplines();
    this.getAllClass();
    this.getAllCourse();
    this.getAllTeachers();
    this.routeSub = this.route.params.subscribe((params) => {
      this.refs = params;
    });
  }

  getDisciplinesByProfessor(value: any, index: any): any {
    this.registerTeacherService.getById(value.teacher).subscribe(
      response => {
        this.discipline[index].teacherName = response.name
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  select(selectDisc: any, content: any, size: string): void {
    console.log(selectDisc);
    this.selectDiscipline = selectDisc;
    this.formDiscipline = selectDisc;
    delete this.formDiscipline.teacherName;
    delete this.formDiscipline.__v;
    this.formDiscipline.course = selectDisc.course._id;
    this.formDiscipline.classroom = selectDisc.classroom._id;
    this.openModal(content, size);
    console.log(this.formDiscipline);
  }

  openModal(content: any, s: string) {
    this.modalRef = this.modalService.open(content, { size: s });
  }

  newDiscipline(content, size){
    this.openModal(content, size);
  }

  deleteDisc(id: any): void {
    this.registerDisciplineService.delete(id).subscribe(
      response => {
        this.getDisciplines();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    this.modalRef.close();
  }

  getClassById(value: any, index: any): any {
    this.registerClassService.getById(value.classroom).subscribe(
      response => {
        this.discipline[index].classroom = response;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  getAllCourse(): void {
    this.registerCourseService.get().subscribe(
      data => {
        this.course = data;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  getAllTeachers(): void {
    this.registerTeacherService.get().subscribe(
      data => {
        this.teachers = data;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  getAllClass(): void {
    this.registerClassService.get().subscribe(
      data => {
        this.class = data;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  getCourseById(value: any, index: any): any {
    this.registerCourseService.getById(value.course).subscribe(
      response => {
        this.discipline[index].course = response
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  getDisciplines(): void {
    this.registerDisciplineService.get().subscribe(
      response => {
        console.log(response);
        this.discipline = response;
        this.discipline.forEach((value, index) => {
          this.getDisciplinesByProfessor(value,index);
          this.getCourseById(value,index);
          this.getClassById(value ,index);
      });
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  selectLocation(location: any): void {
    window.location.href = 'http://maps.google.com/?saddr=Current%20Location&daddr=' + location.latitude + ',' + location.longitude
    // this.router.navigate(['/map', {lat: location.latitude, lng: location.longitude} ]);
  }
  
  goBack():void{
    this.router.navigate(['/']);
  }

  handlePageChange(event): void {
    // if(event === 1)
    // this.pageDay = "Segunda-feira"
    // if(event === 2)
    // this.pageDay = "Terça-feira"
    // if(event === 3)
    // this.pageDay = "Quarta-feira"
    // if(event === 4)
    // this.pageDay = "Quinta-feira"
    // if(event === 5)
    // this.pageDay = "Sexta-feira"
    // if(event === 6)
    // this.pageDay = "Sábado"
    this.page = event;
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }

  closeModal(): void {
    this.formDiscipline = {
      _id: null,
      name: null,
      classroom: null,
      course:null,
      day: null,
      teacher: null,
      starting_time: null,
      final_time: null
    };
    this.isSignUpFailed = false;
    this.isSuccessful = false;
    this.modalRef.close();
    this.getDisciplines();
  }

  onSubmitDiscipline(): void {
    const dto = this.formDiscipline;
    console.log(dto)
    this.registerDisciplineService.saveOrUpdate(dto).subscribe(
      data => {
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
