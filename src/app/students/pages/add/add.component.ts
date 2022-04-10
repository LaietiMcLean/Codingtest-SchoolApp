import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Student } from './../../interfaces/students.interface';
import { StudentsService } from './../../services/students.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`

    img {
      border-radius: 5%;
      margin-left: 1.2rem;
    }

    .option {
      margin: 2rem;
    }

    button {
      margin: 0 1rem;
    }
  `
  ]
})
export class AddComponent implements OnInit {

  courses = [
    {
      id: 1,
      course: 1
    },
    {
      id: 2,
      course: 2
    },
    {
      id: 3,
      course: 3
    },
    {
      id: 4,
      course: 4
    },
    {
      id: 5,
      course: 5
    }
  ];

  students: Student = {
    full_name: '',
    email: '',
    course: 0,
    alt_img: '',
    id: '',
    subject1: '',
    grade1: 0,
    subject2: '',
    grade2: 0,
    subject3: '',
    grade3: 0
  }

  constructor(private studentsService: StudentsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    if( !this.router.url.includes('edit') ) {
      return;
    }

    this.activatedRoute.params
        .pipe(
          switchMap(({id}) => this.studentsService.getStudentsById(id))
        )
        .subscribe(students => this.students = students);
  }

  save() {
    if (this.students.id.trim().length === 0) {
        return;
    }

    if (this.students.id) {
      this.studentsService.editStudent(this.students)
          .subscribe(students => console.log('Editing', students))
    }

  }

  create() {
    if(this.students.id) {
      this.studentsService.addStudent(this.students)
          .subscribe(students => console.log('Subscribing', students))
    }
  }

  back() {
    this.router.navigate(['/students/list']);
  }

}
