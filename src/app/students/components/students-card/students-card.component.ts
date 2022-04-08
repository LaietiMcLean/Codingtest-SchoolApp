import { Component, Input } from '@angular/core';

import { Student } from './../../interfaces/students.interface';

@Component({
  selector: 'app-students-card',
  templateUrl: './students-card.component.html',
  styles: [ `
    mat-card {
      margin-top: 20px
    }
  `
  ]
})
export class StudentsCardComponent {

  @Input() students!: Student;

}
