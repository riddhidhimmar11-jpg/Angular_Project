import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeacherService } from '../../services/teacher-service';

@Component({
  selector: 'app-teacher-detail',
  imports: [],
  templateUrl: './teacher-detail.html',
  styleUrl: './teacher-detail.css',
})
export class TeacherDetail implements OnInit {

           email!:string;
          private route = inject(ActivatedRoute);

          //service call karavi
          private teacherService = inject(TeacherService);
          
          ngOnInit(): void{
            this.email=this.route.snapshot.paramMap.get('email')||'';
            console.log(this.route);
          }

          get teacherDetails(){
            return this.teacherService.getTeacherByEmail(this.email);
          }

}
