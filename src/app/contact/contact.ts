import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.html'
})
export class Contact {

  name = '';
  email = '';
  subject = '';
  message = '';

  emp: any[] = [];
  editIndex: number | null = null;

  add() {
    if (this.editIndex === null) {
      this.emp.push({
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      });
    } else {
      this.emp[this.editIndex] = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      };
      //console.log(this.emp);
      this.editIndex = null;
    }
    this.clear();
  }

  edit(i: number) {
    this.name = this.emp[i].name;
    this.email = this.emp[i].email;
    this.subject = this.emp[i].subject;
    this.message = this.emp[i].message;
    this.editIndex = i;
  }

  delete(i: number) {
    this.emp.splice(i, 1);
  }

  clear() {
    this.name = '';
    this.email = '';
    this.subject = '';
    this.message = '';
  }
}
