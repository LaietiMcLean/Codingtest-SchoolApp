import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Student } from './../interfaces/students.interface';

import { environment } from './../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/students`)
  }

  getStudentsById(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/students/${id}`);
  }

  getResults(term: string): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/students?q=${term}`);
  }

  addStudent(students: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/students`, students);
  }

  editStudent(students: Student): Observable<Student> {
    return this.http.put<Student>(`${this.baseUrl}/students/${students.id}`, students);
  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/students/${id}`);
  }

}
