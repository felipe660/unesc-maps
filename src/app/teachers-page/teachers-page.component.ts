import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {
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
