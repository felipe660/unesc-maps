import { RegisterClassService } from './../register-teacher/register-class.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.scss']
})
export class ClassPageComponent implements OnInit {

  filtro: string = '';

  // pagination
  currentIndex = 1;
  title = '';

  page = 1;
  pageSize = 5;
  pageSizes = [5, 10, 20];
  errorMessage: any;
  isSignUpFailed: boolean;
  classRoom: [{}];
  modalRef: NgbModalRef;
  selectClass: any;
  isDeleted: boolean = false;

  constructor(
    private router: Router,
    private route :ActivatedRoute,
    private modalService: NgbModal,
    private registerClassService: RegisterClassService
    ) { }

  ngOnInit(): void {
    this.getAllCass();
  }

  deleteClass(id: any): void {
    this.registerClassService.delete(id).subscribe(
      response => {
        console.log(response);
        this.isDeleted = true;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  closeModal(): void {
    this.modalRef.close();
    this.getAllCass();
    this.isDeleted = false;
  }

  getAllCass(): void {
    this.registerClassService.get().subscribe(
      response => {
        console.log(response);
        this.classRoom = response;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  select(selectClass: any, content: any, size: string): void {
    this.selectClass = selectClass;
    this.openModal(content, size);
  }

  openModal(content: any, s: string): void {
    this.modalRef = this.modalService.open(content, { size: s });
  }

  selectLocation(location: any): void {
    window.location.href = 'http://maps.google.com/?saddr=Current%20Location&daddr=' + location.latitude + ',' + location.longitude
    // this.router.navigate(['/map', {lat: location.latitude, lng: location.longitude} ]);
  }
  
  goBack():void{
    this.router.navigate(['/']);
  }

  handlePageChange(event): void {
    this.page = event;
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }
}
