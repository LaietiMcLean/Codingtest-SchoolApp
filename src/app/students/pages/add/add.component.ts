import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Student } from './../../interfaces/students.interface';
import { StudentsService } from './../../services/students.service';
import { switchMap } from 'rxjs';

import { ConfirmComponent } from './../../components/confirm/confirm.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


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

  subjects = [
    {
      id: 'Matemáticas 1',
      subject: 'Matemáticas 1'
    },
    {
      id: 'Lengua Castellana',
      subject: 'Lengua Castellana'
    },
    {
      id: 'Inglés',
      subject: 'Inglés'
    }
  ]

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
              private router: Router,
              private snakBar: MatSnackBar,
              public dialog: MatDialog) { }

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
          .subscribe(students => this.showSnakBar('Student edited'))
    }

  }

  create() {
    if(this.students.id) {
      this.studentsService.addStudent(this.students)
          .subscribe(students => this.showSnakBar('Student created'))
    }
  }

  back() {
    this.router.navigate(['/students/list']);
  }

  remove() {

    const dialog = this.dialog.open(ConfirmComponent, {
      width: '300px',
      data: this.students
    })

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.studentsService.deleteStudent(this.students.id!)
            .subscribe(resp => {
                this.router.navigate(['/students']);
        });
        }
      }
    )
  }

  showSnakBar(message: string) {
    this.snakBar.open(message, 'OK!', {
      duration: 2500
    })
  }

}
