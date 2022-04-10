import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Student } from '../../interfaces/students.interface';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [`
    img {
      border-radius: 5%;
    }

    .container {
      margin-left: 5rem;
      margin-top: 5rem;
      text-align-last: center;
    }

    .grade-container {
      margin-top: 2rem;
      text-align-last: center;

    }
    button {
      margin-top: 2rem;
    }
  `
  ]
})
export class StudentsComponent implements OnInit {

  students!: Student

  constructor(
    private activatedRoute: ActivatedRoute,
    private StudentsService: StudentsService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.StudentsService.getStudentsById(id))
      )
      .subscribe(students => this.students = students);

  }

  back() {
    this.router.navigate(['/students/list']);
  }

}
