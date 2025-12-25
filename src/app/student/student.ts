import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudService } from '../services/stud-service';
import { Tabel } from "../shared/tabel/tabel";
import { Modal } from '../shared/modal/modal';

@Component({
  selector: 'app-student',
  imports: [RouterLink, Tabel, Modal],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  students: any[] = [];
  ngOnInit(): void {

    this.students = this.studService.getStudent();
  }

  constructor(public studService: StudService) {
    // service mathi data lavse
    this.students = this.studService.student;
  }

  savestudent(studentValue: any) {

    this.studService.saveStudent(studentValue);
  }
  
  editdata(index: number) {
    this.studService.editStudent(index);
  }


}
