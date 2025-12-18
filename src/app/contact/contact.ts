import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{ 
  name = '';
  email = '';
  subject = '';
  message = '';

  emp: any[] = [];
  editIndex: number | null = null;

  //angular lifecycle hooks

  ngOnInit() {
  console.log('AdminContact ngOnInit');
}

  // Called once after external content is loaded
ngAfterContentInit() {
  console.log('AdminContact ngAfterContentInit');
}

// Called every time after content is checked
ngAfterContentChecked() {
  console.log('AdminContact ngAfterContentChecked');
}

// Called once after component view and child views are loaded
ngAfterViewInit() {
  console.log('AdminContact ngAfterViewInit');
}

// Called every time after the view(html) is checked
ngAfterViewChecked() {
  console.log('AdminContact ngAfterViewChecked');
}

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

