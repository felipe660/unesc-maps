import { ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import enums from '../components/enums/enums.json'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  locations = enums.locations;
  filtro: string = '';

  constructor(
    private router: Router,
    private route :ActivatedRoute
  ) { }
 
  ngOnInit(): void {
    
  }

  selectLocation(location: any): void {
    this.router.navigate(['/map', location ]);
  }

  filtrar(palavraChave: string) {
    if (palavraChave) {
      palavraChave = palavraChave.toUpperCase();

      this.locations = this.locations.filter(a =>
            a.name.toUpperCase().indexOf(palavraChave) >= 0
        );
    }
  }

}
