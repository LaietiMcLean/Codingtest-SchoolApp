import { Component, Inject, OnInit } from '@angular/core';

import { Student } from './../../interfaces/students.interface';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [
  ]
})
export class ConfirmComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student ) { }

  ngOnInit(): void {
  }

  remove() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close();
  }

}
