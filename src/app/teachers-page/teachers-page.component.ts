import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RegisterTeacherService } from '../register-teacher/register-teacher.service';

@Component({
  selector: 'app-teachers-page',
  templateUrl: './teachers-page.component.html',
  styleUrls: ['./teachers-page.component.scss']
})
export class TeachersPageComponent implements OnInit {

  page = 1;
  pageSize = 5;
  pageSizes = [5, 10, 20];
  hasAutorization: boolean = true;
  filtro: string = '';
  teachers: any;
  errorMessage: any;
  isSignUpFailed: boolean;
  modalRef: NgbModalRef;
  isSuccessful = false;
  formTeacher: any = {
    name: null,
    _id: null
  };
  selectTeacher: any;


  constructor(
    private modalService: NgbModal,
    private router: Router,
    private registerTeacherService: RegisterTeacherService
    ) { }

  ngOnInit(): void {
    this.getAllTeachers();
  }

  getAllTeachers(): void {
    this.registerTeacherService.get().subscribe(
      data => {
        console.log(data);
        this.teachers = data;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  deleteDisc(id: any): void {
    this.registerTeacherService.delete(id).subscribe(
      response => {
        console.log(response);
        this.getAllTeachers();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    this.modalRef.close();
  }

  onSubmit(): void {
    const dto = this.formTeacher;
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

  select(selectTeacher: any, content: any, size: string): void {
    console.log(selectTeacher)
    this.selectTeacher = selectTeacher;
    this.formTeacher = {
      name: selectTeacher.name,
      _id: selectTeacher._id
    }
    this.openModal(content, size);
  }

  openModal(content: any, s: string) {
    this.modalRef = this.modalService.open(content, { size: s });
  }

  newTeacher(content, size){
    this.openModal(content, size);
  }

  closeModal(): void {
    this.formTeacher = {
      _id: null,
      name: null,
    };
    this.isSignUpFailed = false;
    this.isSuccessful = false;
    this.modalRef.close();
    this.getAllTeachers();
  }

  goBack():void{
    this.router.navigate(['/']);
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }
  
  handlePageChange(event): void {
    this.page = event;
  }

}
