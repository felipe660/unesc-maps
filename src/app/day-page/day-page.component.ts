import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-day-page',
  templateUrl: './day-page.component.html',
  styleUrls: ['./day-page.component.scss']
})
export class DayPageComponent implements OnInit {

  routeSub: Subscription;
  method: any;

  constructor(
    private router: Router,
    private route :ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      console.log(params)
      this.method = params.method
    });
  }

  navigation(day, method): void {
    this.router.navigate(['/home-page', {day, method} ])
  }

}
