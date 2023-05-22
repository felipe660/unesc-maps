import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Tutorial } from '../models/tutorial.model';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  baseUrl = 'http://localhost:8080/api/tutorials';

  constructor(private http: HttpClient) { }

  getAll(params: any): Observable<any> {
    return this.http.get<any>(this.baseUrl, { params });
  }
}
