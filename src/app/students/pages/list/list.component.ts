import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../../services/students.service';

import { Student } from './../../interfaces/students.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {

    this.studentsService.getStudents()
      .subscribe(students => {
        this.students = students;
      });
  }

}

