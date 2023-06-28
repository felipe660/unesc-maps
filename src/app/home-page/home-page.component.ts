import { RegisterDisciplineService } from './../register-teacher/register-discipline.service';
import { ArrayDayPipe } from './../components/pipes/array-day.pipe';
import { ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import turmas from '../components/enums/turmas.json'
import { Subscription } from 'rxjs';
import { RegisterTeacherService } from '../register-teacher/register-teacher.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  professores = turmas.turmas;
  filtro: string = '';
  routeSub: Subscription;
  refs: any;

  // pagination
  currentIndex = 1;
  title = '';

  page = 1;
  pageSize = 5;
  pageSizes = [5, 10, 20];
  pageDay: string = "Segunda";
  errorMessage: any;
  isSignUpFailed: boolean;
  professor: any;

  constructor(
    private router: Router,
    private route :ActivatedRoute,
    private arrayDayPipe: ArrayDayPipe,
    public registerTeacherService: RegisterTeacherService,
    public registerDisciplineService: RegisterDisciplineService
  ) { }
 
  ngOnInit(): void {
    this.getTeachers();
    this.getDisciplines();
    this.routeSub = this.route.params.subscribe((params) => {
      console.log(params)
      this.refs = params;
    });
  }

  getDisciplinesByProfessor(id): void {
    this.registerTeacherService.getById(id).subscribe(
      data => {
        console.log(data);
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
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
        this.professor = data;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  selectLocation(location: any): void {
    this.router.navigate(['/map', {lat: location.lat, lng: location.lng} ]);
  }

  goBack():void{
    this.router.navigate(['/']);
  }

  handlePageChange(event): void {
    if(event === 1)
    this.pageDay = "Segunda-feira"
    if(event === 2)
    this.pageDay = "Terça-feira"
    if(event === 3)
    this.pageDay = "Quarta-feira"
    if(event === 4)
    this.pageDay = "Quinta-feira"
    if(event === 5)
    this.pageDay = "Sexta-feira"
    if(event === 6)
    this.pageDay = "Sábado"
    this.page = event;
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
  }

}
