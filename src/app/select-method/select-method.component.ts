import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-select-method',
  templateUrl: './select-method.component.html',
  styleUrls: ['./select-method.component.scss']
})
export class SelectMethodComponent implements OnInit {

  constructor
    (
    private router: Router,
    private route :ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  navigation(method): void {
    if(method === 'professores'){
      this.router.navigate(['/home-page'])
    }
    if(method === 'salas'){
      this.router.navigate(['/class-page'])
    }
  }

}
