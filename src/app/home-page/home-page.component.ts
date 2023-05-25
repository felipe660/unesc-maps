import { ArrayDayPipe } from './../components/pipes/array-day.pipe';
import { ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import enums from '../components/enums/enums.json'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  professores = enums.professores;
  filtro: string = '';
  routeSub: Subscription;
  refs: any;
  listaProfessoresByDay = [];

  // pagination
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 6;
  pageSizes = [2, 4, 6];
  pageDay: string = "Segunda";
  newList: any = [{}];

  constructor(
    private router: Router,
    private route :ActivatedRoute,
    private arrayDayPipe: ArrayDayPipe,
  ) { }
 
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      console.log(params)
      this.refs = params;
    });
    this.createList();
  }

  // filterByDay(ref): void{
  //   for(var i in this.professores ){
  //     for(var x in this.professores[i].turmas){
  //       if(this.professores[i].turmas[x].day === ref.day){
  //         this.listaProfessores.push(this.professores[i]);
  //       } 
  //     }
  //   }
  // }

  createList():void {
    console.log(this.professores);
    for(let i = 0; i < this.professores.length; i++){
      for(let x = 0; x < this.professores[i]?.turmas.length; x++){
        this.newList[x] = this.professores[i]?.turmas[x]
      }
    }
    console.log(this.newList)
  }

  selectLocation(location: any): void {
    this.router.navigate(['/map', location ]);
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
