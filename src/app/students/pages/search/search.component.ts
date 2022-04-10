import { Component, OnInit } from '@angular/core';

import { StudentsService } from './../../services/students.service';
import { Student } from './../../interfaces/students.interface';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`
    mat-form-field {
      width: 100%;
    }
  `
  ]
})
export class SearchComponent implements OnInit {

  term: string = '';
  students: Student[] = [];
  selectedStudent: Student | undefined;

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
  }

  searching() {
    this.studentsService.getResults(this.term.trim())
      .subscribe(students => this.students = students);
  }

  selectedOption(event: MatAutocompleteSelectedEvent) {

    if(!event.option.value) {
      this.selectedStudent = undefined;
      return;
    }

    const student: Student = event.option.value;
    this.term = student.full_name;
    this.studentsService.getStudentsById(student.id)
        .subscribe(student => this.selectedStudent = student);
  }

}
