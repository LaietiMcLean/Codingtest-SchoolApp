import { Component, Input } from '@angular/core';

import { Student } from './../../interfaces/students.interface';

@Component({
  selector: 'app-students-card',
  templateUrl: './students-card.component.html',
  styles: [ `
    button {
      margin: 0 1rem;
    }

    mat-card {
      text-align: center;
      margin-top: 20px
    }
    mat-card-header {
      justify-content: center;
    }
  `
  ]
})
export class StudentsCardComponent {

  @Input() students!: Student;

}
