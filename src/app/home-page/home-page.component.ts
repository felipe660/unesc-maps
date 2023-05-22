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
  listaProfessores = [];

  constructor(
    private router: Router,
    private route :ActivatedRoute,
    private arrayDayPipe: ArrayDayPipe
  ) { }
 
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      console.log(params)
      this.refs = params;
    });
    console.log(this.listaProfessores)
    this.filterByDay(this.refs);
  }

  filterByDay(ref): void{
    for(var i in this.professores ){
      if(this.professores[i].day  === ref.day){
        this.listaProfessores.push(this.professores[i]);
      }
    }
    console.log(this.listaProfessores);
  }

  selectLocation(location: any): void {
    this.router.navigate(['/map', location ]);
  }

  // filtrar(palavraChave: string) {
  //   if (palavraChave) {
  //     palavraChave = palavraChave.toUpperCase();

  //     this.professores = this.professores.filter(a =>
  //           a.name.toUpperCase().indexOf(palavraChave) >= 0
  //       );
  //   }
  // }

}
