import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterCourseService {

  readonly BASE_URI = `https://unesc-app-help-freshman.vercel.app/course`;

  constructor(private http: HttpClient) { }

  saveOrUpdate(dto: any): any {
    if (dto.id) {
        return this.http.put(`${this.BASE_URI}/${dto.id}`, dto);
    } else {
        return this.http.post(`${this.BASE_URI}`, dto);
    }
  }

  get(): any {
    return this.http.get(`${this.BASE_URI}`);
  }

  delete(id: string): any {
    return this.http.delete(`${this.BASE_URI}/${id}`);
  }

  getById(id: string): any {
    return this.http.get(`${this.BASE_URI}/${id}`);
  }
}
