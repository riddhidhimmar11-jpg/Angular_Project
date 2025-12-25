import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudService {

  student = [
    {
      name: 'riddhi', phone: 9587452685, email: 'abc@gmail.com', add: 'Desaiwad', gender: 'female'
    },
    {
      name: 'shiry', phone: 9587452685, email: 'abc@gmail.com', add: 'Desaiwad', gender: 'female'
    }
  ]

  showForm = false;
  model = { name: '', phone: 0, email: '', add: '', gender: '' };
  editIndex: number | null = null;

  //add the student
  addStudent() {
    this.model = { name: '', phone: 0, email: '', add: '', gender: '' };
    this.showForm = true;
  }
  
  //edit the student
  editStudent(index: number) {
    this.editIndex = index;                      // FIX
    this.model = { ...this.student[index] };    // copy data
    this.showForm = true;

    console.log('edit');
  }
  //save the data of stduent
  saveStudent(studentValue: any) {
    if (this.editIndex !== null) {
      this.student[this.editIndex] = { ...studentValue }; // UPDATE
    } else {
      this.student.push({ ...studentValue });             // ADD
    }
    this.editIndex = null;
    this.showForm = false;
  }
  // Delete student
  deleteStudent(index: number) {
    this.student.splice(index, 1);
  }

  getStudent() {
    return this.student;
  }
}
