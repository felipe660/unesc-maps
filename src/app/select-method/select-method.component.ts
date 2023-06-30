import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-select-method',
  templateUrl: './select-method.component.html',
  styleUrls: ['./select-method.component.scss']
})
export class SelectMethodComponent implements OnInit {

  hasAutorization: boolean = true;

  constructor
    (
    private router: Router,
    private route :ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  navigation(method): void {
    console.log(method)
    if(method === 'disciplinas'){
      this.router.navigate(['/home-page'])
    }
    if(method === 'professores'){
      this.router.navigate(['/professores'])
    }
    if(method === 'salas'){
      this.router.navigate(['/class-page'])
    }
    if(method === 'registerTeacher'){
      this.router.navigate(['/registerTeacher'])
    }
    if(method === 'cursos'){
      this.router.navigate(['/cursos'])
    }
  }

}
