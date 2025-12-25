import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudService } from '../services/stud-service';
import { TeacherService } from '../services/teacher-service';
import { Tabel } from '../shared/tabel/tabel';
import { email } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Modal } from '../shared/modal/modal';

@Component({
  selector: 'app-teacher',
  imports: [RouterLink, Tabel,FormsModule,Modal],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css',
})
export class Teacher {

  teacher: any[] = [];
  ngOnInit():void{

this.teacher=this.teacherService.getTeacher();
}
  constructor(public teacherService: TeacherService) {
    // service mathi data lavse
    this.teacher = this.teacherService.teacher;
  }
saveteacher(teacherValue:any){

  this.teacherService.saveTeacher(teacherValue);
}
editdata(index: number){
  this.teacherService.editTeacher(index);
}
}