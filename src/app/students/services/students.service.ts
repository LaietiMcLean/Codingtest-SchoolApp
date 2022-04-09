import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Student } from './../interfaces/students.interface';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:3000/students')
  }

  getStudentsById(id: string): Observable<Student> {
    return this.http.get<Student>(`http://localhost:3000/students/${id}`);
  }

}
