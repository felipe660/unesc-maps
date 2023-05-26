import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.scss']
})
export class ClassPageComponent implements OnInit {

  constructor(
    private router: Router,
    private route :ActivatedRoute,
    ) { }

  ngOnInit(): void {
  }
  goBack():void{
    this.router.navigate(['/']);
  }
}
