import { ArrayDayPipe } from './../components/pipes/array-day.pipe';
import { ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import turmas from '../components/enums/turmas.json'
import { Subscription } from 'rxjs';

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
