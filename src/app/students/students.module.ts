import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { StudentsComponent } from './pages/students/students.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { StudentsCardComponent } from './components/students-card/students-card.component';


@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    StudentsComponent,
    HomeComponent,
    ListComponent,
    StudentsCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
