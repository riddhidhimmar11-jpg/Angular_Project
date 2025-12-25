import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  // @Input() model = {
  //   name: '',
  //   phone: '',
  //   email: '',
  //   add: '',
  //   gender: ''
  // };
  @Input() model:any;
  @Input() editIndex: number | null = null;
  @Output() save = new EventEmitter<any>();
 
  // constructor(public s:StudService, public t:TeacherService){}
  submit() {
    this.save.emit(this.model);
    console.log(this.model);
  }
  


}
