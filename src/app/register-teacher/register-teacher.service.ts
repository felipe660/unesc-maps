import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterTeacherService {

  readonly BASE_URI = `https://unesc-app-help-freshman.vercel.app/teacher`;

  constructor(private http: HttpClient) { }
  
  saveOrUpdate(dto: any): any {
    if (dto._id) {
        return this.http.put(`${this.BASE_URI}/${dto._id}`, dto);
    } else {
        return this.http.post(`${this.BASE_URI}`, dto);
    }
  }

  get(): any {
    return this.http.get(`${this.BASE_URI}`);
  }

  getById(id: any): any {
    return this.http.get(`${this.BASE_URI}/${id}`);
  }
  
  delete(id: string): any {
    return this.http.delete(`${this.BASE_URI}/${id}`);
  }
}
