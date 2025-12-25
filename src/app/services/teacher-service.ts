import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {

  teacher = [
    {
      name: 'shiry', phone: 9856325478, email: 'bqe@gmail.com', add: 'haleroad', gender: 'male'
    },
    {
      name: 'shiry', phone: 6521458962, email: 'bqe@gmail.com', add: 'haleroad', gender: 'male'
    }
  ]

  showForm = false;
  model = { name: '', phone: 0, email: '', add: '', gender: '' };
  editIndex: number | null = null;

 //add the student
  addTeacher() {
    this.model = { name: '', phone: 0 , email: '', add: '', gender: '' };
    this.showForm = true;
  }
  
  //edit the teacher
  editTeacher(index: number) {
    this.editIndex = index;                      // FIX
    this.model = { ...this.teacher[index] };    // copy data
    this.showForm = true;

    console.log('edit');
  }
  //save the data of teacher
  saveTeacher(teacherValue: any) {
    if (this.editIndex !== null) {
      this.teacher[this.editIndex] = { ...teacherValue }; // UPDATE
    } else {
      this.teacher.push({ ...teacherValue });             // ADD
    }
    this.editIndex = null;
    this.showForm = false;
  }
  // Delete teacher
  deleteTeacher(index: number) {
    this.teacher.splice(index, 1);
  }

  getTeacher() {
    return this.teacher;
  }
 
  getTeacherByEmail(email:string){
    return this.teacher.find(teacher => teacher.email === email);
  }

}
